(function(global){
    'use strict';
    function ServiceVirement(){}

    ServiceVirement.prototype.effectuerVirement = function(montant, compteDebiteur, compteCrediteur) {
        if (montant > compteDebiteur.solde)
        {
            return global.VirementStatus.SOLDE_DEPASSE;
        }

        if (montant > this.plafond)
        {
            return global.VirementStatus.PLAFOND_DEPASSE;
        }

        compteDebiteur.solde -= montant;
        compteCrediteur.solde += montant;
        return global.VirementStatus.OK;
    }

    global.ServiceVirement = ServiceVirement;
})(this);