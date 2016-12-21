using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrezBDDTDD.Tests.Model;
using PrezBDDTDD.Tests.Process;
using System;
using TechTalk.SpecFlow;

namespace PrezBDDTDD.Tests.Steps
{
    [Binding]
    public class GestionDesVirementsThenSteps
    {
        public GestionDesVirementsThenSteps(Context ctx)
        {
            this.Context = ctx;
        }

        public Context Context { get; private set; }

        [Then(@"le solde du compte cheque est (.*)€")]
        public void ThenLeSoldeDuCompteChequeEst(int solde)
        {
            Assert.AreEqual(solde, Context.CompteCheque.Solde);
        }
        
        [Then(@"le solde du compte épargne est (.*)€")]
        public void ThenLeSoldeDuCompteEpargneEst(int solde)
        {
            Assert.AreEqual(solde, Context.CompteEpargne.Solde);
        }
        
        [Then(@"le virement est confirmé")]
        public void ThenLeVirementEstConfirme()
        {
            Assert.AreEqual(RetourVirement.Ok, Context.StatutVirement);
        }
        
        [Then(@"le virement est refusé pour motif hors provision")]
        public void ThenLeVirementEstRefusePourMotifHorsProvision()
        {
            Assert.AreEqual(RetourVirement.SoldeDepasse, Context.StatutVirement);
        }
        
        [Then(@"le virement est refusé pour motif plafond dépassé")]
        public void ThenLeVirementEstRefusePourMotifPlafondDepasse()
        {
            Assert.AreEqual(RetourVirement.PlafondDepasse, Context.StatutVirement);
        }
    }
}
