export default class Compte {
    constructor(solde) {
        this.setSolde(solde)
    }

    setSolde(solde) {
        this.solde = parseInt(solde);
    }
}