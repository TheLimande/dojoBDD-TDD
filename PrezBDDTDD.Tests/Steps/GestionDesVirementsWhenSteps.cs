using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrezBDDTDD.Tests.Model;
using PrezBDDTDD.Tests.Process;
using System;
using TechTalk.SpecFlow;

namespace PrezBDDTDD.Tests.Steps
{
    [Binding]
    public class GestionDesVirementsWhenSteps
    {
        public GestionDesVirementsWhenSteps(Context ctx)
        {
            this.Context = ctx;
        }

        public Context Context { get; private set; }
        
        
        [When(@"j'effectue un virement de (.*)€ du compte cheque vers le compte épargne")]
        public void WhenJEffectueUnVirementDeDuCompteChequeVersLeCompteEpargne(int montant)
        {
            Context.StatutVirement = Context.srvVirement.EffectuerVirement(montant, Context.CompteCheque, Context.CompteEpargne);
        }        
    }
}
