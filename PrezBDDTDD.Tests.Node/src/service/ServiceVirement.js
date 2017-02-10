var VirementStatus = require('../model/VirementStatus');

module.exports = class ServiceVirement {
    constructor(plafond){
        this.plafond = plafond;
    }

    effectuerVirement(montant, compteDebiteur, compteCrediteur) {
        if (montant > compteDebiteur.solde)
        {
            return VirementStatus.SOLDE_DEPASSE;
        }

        if (montant > this.plafond)
        {
            return VirementStatus.PLAFOND_DEPASSE;
        }

        compteDebiteur.solde -= montant;
        compteCrediteur.solde += montant;
        return VirementStatus.OK;
    }
};