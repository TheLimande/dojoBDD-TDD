(function(){
	feature('Gestion des Virements: Dans le but de pouvoir gérer mes comptes\n'+
'En tant que client banque\n'+
'Je souhaite pouvoir effectuer des virements entre mes comptes	\n'+
'\n'+
'RG1 : virement simple, je vire X€ d\'un compte A vers le compte B, le solde est impacté dans les deux comptes.\n'+
'RG2 : virement hors provision, solde A insuffisant\n'+
'RG3 : virement plafonné')
		.scenario('Virement simple')
			.given ('j\'ai un compte cheque avec un solde de 500€')
			.given ('j\'ai un compte épargne avec un solde de 0€')
			.when ('j\'effectue un virement de 100€ du compte cheque vers le compte épargne')
			.then ('le solde du compte cheque est 400€')
			.then ('le solde du compte épargne est 100€')
			.then ('le virement est confirmé')
		.scenario('Virement hors provision')
			.given ('j\'ai un compte cheque avec un solde de 50€')
			.given ('j\'ai un compte épargne avec un solde de 1000€')
			.when ('j\'effectue un virement de 100€ du compte cheque vers le compte épargne')
			.then ('le solde du compte cheque est 50€')
			.then ('le solde du compte épargne est 1000€')
			.then ('le virement est refusé pour motif hors provision')
		.scenario('Virement plafonné')
			.given ('j\'ai un compte cheque avec un solde de 1000€')
			.given ('j\'ai un compte épargne avec un solde de 0€')
			.given ('la limite de virement est 500€')
			.when ('j\'effectue un virement de 501€ du compte cheque vers le compte épargne')
			.then ('le solde du compte cheque est 1000€')
			.then ('le solde du compte épargne est 0€')
			.then ('le virement est refusé pour motif plafond dépassé')
})();