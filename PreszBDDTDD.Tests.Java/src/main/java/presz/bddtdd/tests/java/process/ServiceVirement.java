package presz.bddtdd.tests.java.process;

import presz.bddtdd.tests.java.model.Compte;

public class ServiceVirement {

    private int plafond;

    public ServiceVirement() {
        //Todo : demander la limite de plafond par défaut
        this.plafond = 1000;
    }

    public RetourVirement effectuerVirement(int montant, Compte compteDebiteur, Compte compteCrediteur) {
        if (montant > compteDebiteur.getSolde()) {
            return RetourVirement.SoldeDepasse;
        }
        if (montant > plafond) {
            return RetourVirement.PlafondDepasse;
        }

        compteDebiteur.setSolde(compteDebiteur.getSolde() - montant);
        compteCrediteur.setSolde(compteCrediteur.getSolde() + montant);
        return RetourVirement.Ok;
    }

    public int getPlafond() {
        return plafond;
    }

    public void setPlafond(int plafond) {
        this.plafond = plafond;
    }
}
