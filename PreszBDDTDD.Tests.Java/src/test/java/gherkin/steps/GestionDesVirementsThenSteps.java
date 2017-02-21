package gherkin.steps;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import presz.bddtdd.tests.java.model.Context;
import presz.bddtdd.tests.java.process.RetourVirement;

public class GestionDesVirementsThenSteps {

    private Context context;

    public GestionDesVirementsThenSteps(Context ctx) {
        this.context = ctx;
    }

    @Then("le solde du compte cheque est (.*)€")
    public void ThenLeSoldeDuCompteChequeEst(int solde) {
        Assert.assertEquals(solde, context.getCompteCheque().getSolde());
    }

    @Then("le solde du compte épargne est (.*)€")
    public void ThenLeSoldeDuCompteEpargneEst(int solde) {
        Assert.assertEquals(solde, context.getCompteEpargne().getSolde());
    }

    @Then("le virement est confirmé")
    public void ThenLeVirementEstConfirme() {
        Assert.assertEquals(RetourVirement.Ok, context.getStatutVirement());
    }

    @Then("le virement est refusé pour motif hors provision")
    public void ThenLeVirementEstRefusePourMotifHorsProvision() {
        Assert.assertEquals(RetourVirement.SoldeDepasse, context.getStatutVirement());
    }

    @Then("le virement est refusé pour motif plafond dépassé")
    public void ThenLeVirementEstRefusePourMotifPlafondDepasse() {
        Assert.assertEquals(RetourVirement.PlafondDepasse, context.getStatutVirement());
    }
}
