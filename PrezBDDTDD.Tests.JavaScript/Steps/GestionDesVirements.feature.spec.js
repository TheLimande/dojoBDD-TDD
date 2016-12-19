(function () {

	var CompteCheque = new Compte();
	var CompteEpargne = new Compte();
	var srvVirement = new ServiceVirement();
	var StatutVirement;


	featureSteps('Gestion des Virements: Dans le but de pouvoir gérer mes comptes\n' +
'En tant que client banque\n' +
'Je souhaite pouvoir effectuer des virements entre mes comptes	\n' +
'\n' +
'RG1 : virement simple, je vire X€ d\'un compte A vers le compte B, le solde est impacté dans les deux comptes.\n' +
'RG2 : virement hors provision, solde A insuffisant\n' +
'RG3 : virement plafonné')
	.given('j\'ai un compte cheque avec un solde de (.*)€', function (solde/* Int32 */) {
	    solde = parseInt(solde);
		CompteCheque.Solde = solde;
	})
	.given('j\'ai un compte épargne avec un solde de (.*)€', function (solde/* Int32 */) {
	    solde = parseInt(solde);
	    CompteEpargne.Solde = solde;
	})
	.when('j\'effectue un virement de (.*)€ du compte cheque vers le compte épargne', function (montant/* Int32 */) {
		StatutVirement = srvVirement.EffectuerVirement(montant, CompteCheque, CompteEpargne);
	})
	.then('le solde du compte cheque est (.*)€', function (solde/* Int32 */) {
	    solde = parseInt(solde);
	    expect(CompteCheque.Solde).toBe(solde);
	})
	.then('le solde du compte épargne est (.*)€', function (solde/* Int32 */) {
	    solde = parseInt(solde);
	    expect(CompteEpargne.Solde).toBe(solde);
	})
	.then('le virement est confirmé', function () {
		expect(StatutVirement).toBe(RetourVirement.Ok);
	})
	.then('le virement est refusé pour motif hors provision', function () {
		expect(StatutVirement).toBe(RetourVirement.SoldeDepasse);
	})
	.given('la limite de virement est (.*)€', function (limite/* Int32 */) {
		srvVirement.Plafond = limite;
	})
	.then('le virement est refusé pour motif plafond dépassé', function () {
		expect(StatutVirement).toBe(RetourVirement.PlafondDepasse);
	});
})();