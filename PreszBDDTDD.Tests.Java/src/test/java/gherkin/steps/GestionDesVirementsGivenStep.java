package gherkin.steps;

import cucumber.api.java.en.Given;
import presz.bddtdd.tests.java.model.Context;

public class GestionDesVirementsGivenStep {

    private Context context;

    public GestionDesVirementsGivenStep(Context ctx) {
        this.context = ctx;
    }

    @Given("j'ai un compte cheque avec un solde de (.*)€")
    public void GivenJAiUnCompteChequeAvecUnSoldeDe(int solde) {
        context.getCompteCheque().setSolde(solde);
    }

    @Given("j'ai un compte épargne avec un solde de (.*)€")
    public void GivenJAiUnCompteEpargneAvecUnSoldeDe(int solde) {
        context.getCompteEpargne().setSolde(solde);
    }

    @Given("la limite de virement est (.*)€")
    public void GivenLaLimiteDeVirementEst(int limite) {
        context.getSrvVirement().setPlafond(limite);
    }
}
