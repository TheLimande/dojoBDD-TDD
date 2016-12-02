using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrezBDDTDD.Tests.Model;
using PrezBDDTDD.Tests.Process;
using System;
using TechTalk.SpecFlow;

namespace PrezBDDTDD.Tests.Steps
{
    [Binding]
    public class GestionDesVirementsSteps
    {
        Compte CompteCheque = new Compte();
        Compte CompteEpargne = new Compte();
        ServiceVirement srvVirement = new ServiceVirement();
        RetourVirement StatutVirement;

        [Given(@"j'ai un compte cheque avec un solde de (.*)€")]
        public void GivenJAiUnCompteChequeAvecUnSoldeDe(int solde)
        {
            CompteCheque.Solde = solde;
        }
        
        [Given(@"j'ai un compte épargne avec un solde de (.*)€")]
        public void GivenJAiUnCompteEpargneAvecUnSoldeDe(int solde)
        {
            CompteEpargne.Solde = solde;
        }
        
        [Given(@"la limite de virement est (.*)€")]
        public void GivenLaLimiteDeVirementEst(int limite)
        {
            srvVirement.Plafond = limite;
        }
        
        [When(@"j'effectue un virement de (.*)€ du compte cheque vers le compte épargne")]
        public void WhenJEffectueUnVirementDeDuCompteChequeVersLeCompteEpargne(int montant)
        {
            StatutVirement = srvVirement.EffectuerVirement(montant, CompteCheque, CompteEpargne);
        }
        
        [Then(@"le solde du compte cheque est (.*)€")]
        public void ThenLeSoldeDuCompteChequeEst(int solde)
        {
            Assert.AreEqual(solde, CompteCheque.Solde);
        }
        
        [Then(@"le solde du compte épargne est (.*)€")]
        public void ThenLeSoldeDuCompteEpargneEst(int solde)
        {
            Assert.AreEqual(solde, CompteEpargne.Solde);
        }
        
        [Then(@"le virement est confirmé")]
        public void ThenLeVirementEstConfirme()
        {
            Assert.AreEqual(RetourVirement.Ok, StatutVirement);
        }
        
        [Then(@"le virement est refusé pour motif hors provision")]
        public void ThenLeVirementEstRefusePourMotifHorsProvision()
        {
            Assert.AreEqual(RetourVirement.SoldeDepasse, StatutVirement);
        }
        
        [Then(@"le virement est refusé pour motif plafond dépassé")]
        public void ThenLeVirementEstRefusePourMotifPlafondDepasse()
        {
            Assert.AreEqual(RetourVirement.PlafondDepasse, StatutVirement);
        }
    }
}
