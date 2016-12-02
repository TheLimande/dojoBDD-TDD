using System;
using PrezBDDTDD.Tests.Model;

namespace PrezBDDTDD.Tests.Process
{
    public class ServiceVirement
    {
        public int Plafond { get; internal set; }

        public ServiceVirement()
        {
            //Todo : demander la limite de plafond par défaut
            Plafond = 1000;
        }

        public RetourVirement EffectuerVirement(int montant, Compte compteDebiteur, Compte compteCrediteur)
        {
            if (montant > compteDebiteur.Solde)
            {
                return RetourVirement.SoldeDepasse;
            }

            if (montant > Plafond)
            {
                return RetourVirement.PlafondDepasse;
            }

            compteDebiteur.Solde -= montant;
            compteCrediteur.Solde += montant;
            return RetourVirement.Ok;
            
        }
    }
}