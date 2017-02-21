package presz.bddtdd.tests.java.model;

import presz.bddtdd.tests.java.process.RetourVirement;
import presz.bddtdd.tests.java.process.ServiceVirement;

public class Context {

    private ServiceVirement srvVirement;
    private RetourVirement statutVirement;
    private Compte compteCheque;
    private Compte compteEpargne;

    public Context() {
        this.srvVirement = new ServiceVirement();
        this.statutVirement = RetourVirement.Ko;
        this.compteCheque = new Compte();
        this.compteEpargne = new Compte();
    }

    public ServiceVirement getSrvVirement() {
        return srvVirement;
    }

    public void setSrvVirement(ServiceVirement srvVirement) {
        this.srvVirement = srvVirement;
    }

    public RetourVirement getStatutVirement() {
        return statutVirement;
    }

    public void setStatutVirement(RetourVirement statutVirement) {
        this.statutVirement = statutVirement;
    }

    public Compte getCompteCheque() {
        return compteCheque;
    }

    public void setCompteCheque(Compte compteCheque) {
        this.compteCheque = compteCheque;
    }

    public Compte getCompteEpargne() {
        return compteEpargne;
    }

    public void setCompteEpargne(Compte compteEpargne) {
        this.compteEpargne = compteEpargne;
    }
}
