package gherkin.steps;

import cucumber.api.java.en.When;
import presz.bddtdd.tests.java.model.Context;

public class GestionDesVirementsWhenSteps {

    private Context context;

    public GestionDesVirementsWhenSteps(Context ctx) {
        this.context = ctx;
    }

    @When("j'effectue un virement de (.*)€ du compte cheque vers le compte épargne")
    public void WhenJEffectueUnVirementDeDuCompteChequeVersLeCompteEpargne(int montant) {
        context.setStatutVirement(context.getSrvVirement().effectuerVirement(montant, context.getCompteCheque(), context.getCompteEpargne()));
    }
}
