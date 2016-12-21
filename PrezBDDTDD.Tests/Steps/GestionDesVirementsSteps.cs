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
        public GestionDesVirementsSteps(Context ctx)
        {
            this.Context = ctx;
        }

        public Context Context { get; private set; }
    }
}
