(function(global){
	'use strict';

	featureSteps(/Gestion des Virements/)
		.before(function() {
			this.serviceVirement = new global.ServiceVirement();
			this.compteCheque = new global.Compte();
			this.compteEpargne = new global.Compte();
		})
		.given(/j'ai un compte cheque avec un solde de (\d+)€/, function(solde) {
			this.compteCheque.solde = parseInt(solde);
		})
		.given(/j'ai un compte épargne avec un solde de (\d+)€/, function(solde) {
			this.compteEpargne.solde = parseInt(solde);
		})
		.given(/la limite de virement est (\d+)€/, function(limite) {
			this.serviceVirement.plafond = parseInt(limite);
		})
		.when(/j'effectue un virement de (\d+)€ du compte cheque vers le compte épargne/, function(versement) {
			this.statutVirement = this.serviceVirement.effectuerVirement(parseInt(versement), this.compteCheque, this.compteEpargne);
		})
		.then(/le solde du compte cheque est (\d+)€/, function(nouveauSolde) {
			expect(this.compteCheque.solde).toBe(parseInt(nouveauSolde));
		})
		.then(/le solde du compte épargne est (\d+)€/, function(nouveauSolde) {
			expect(this.compteEpargne.solde).toBe(parseInt(nouveauSolde));
		})
		.then(/le virement est confirmé/, function() {
			expect(this.statutVirement).toBe(global.VirementStatus.OK);
		})
		.then(/le virement est refusé pour motif hors provision/, function() {
			expect(this.statutVirement).toBe(global.VirementStatus.SOLDE_DEPASSE);
		})
		.then(/le virement est refusé pour motif plafond dépassé/, function() {
			expect(this.statutVirement).toBe(global.VirementStatus.PLAFOND_DEPASSE);
		});
})(this);

