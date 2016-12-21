using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrezBDDTDD.Tests.Model;
using PrezBDDTDD.Tests.Process;
using System;
using TechTalk.SpecFlow;

namespace PrezBDDTDD.Tests.Steps
{
    [Binding]
    public class GestionDesVirementsGivenSteps
    {
        public GestionDesVirementsGivenSteps(Context ctx)
        {
            this.Context = ctx;
        }

        public Context Context { get; private set; }

        [Given(@"j'ai un compte cheque avec un solde de (.*)€")]
        public void GivenJAiUnCompteChequeAvecUnSoldeDe(int solde)
        {
            Context.CompteCheque.Solde = solde;
        }
        
        [Given(@"j'ai un compte épargne avec un solde de (.*)€")]
        public void GivenJAiUnCompteEpargneAvecUnSoldeDe(int solde)
        {
            Context.CompteEpargne.Solde = solde;
        }
        
        [Given(@"la limite de virement est (.*)€")]
        public void GivenLaLimiteDeVirementEst(int limite)
        {
            Context.srvVirement.Plafond = limite;
        }        
    }
}
