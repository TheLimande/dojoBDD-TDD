using PrezBDDTDD.Tests.Process;

namespace PrezBDDTDD.Tests.Model
{
    public class Context
    {
        public Context()
        {
            srvVirement = new ServiceVirement();
            StatutVirement = RetourVirement.Ko;
            CompteCheque = new Compte();
            CompteEpargne = new Compte();
        }        

        public ServiceVirement srvVirement { get; set; }

        public RetourVirement StatutVirement { get; set; }
        public Compte CompteCheque { get; set; }
        public Compte CompteEpargne { get; set; }
    }
}