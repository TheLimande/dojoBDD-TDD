import VIREMENT_STATUS from '../model/VirementStatus';

export default class ServiceVersement {

    setPlafond(plafond) {
        this.plafond = plafond;
    }

    effectuerVirement(montant, source, destination) {
        montant = parseInt(montant)

        if (!this.checkSoldeSuffisant(montant, source)) return VIREMENT_STATUS.SOLDE_INSUFISANT;

        if (this.plafond && this.checkPlafondDepasse(montant)) return VIREMENT_STATUS.PLAFOND_DEPASSE;

        source.solde -= montant;
        destination.solde += montant;
        return VIREMENT_STATUS.OK;
    }

    checkSoldeSuffisant(montant, compte) {
        return compte.solde >= montant;
    }

    checkPlafondDepasse(montant) {
        return montant > this.plafond;
    }
}