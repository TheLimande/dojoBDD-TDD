Feature: Gestion des Virements
	Dans le but de pouvoir gérer mes comptes
	En tant que client banque
	Je souhaite pouvoir effectuer des virements entre mes comptes	

	RG1 : virement simple, je vire X€ d'un compte A vers le compte B, le solde est impacté dans les deux comptes.
	RG2 : virement hors provision, solde A insuffisant
	RG3 : virement plafonné

@RG1
Scenario: Virement simple
	Given j'ai un compte cheque avec un solde de 500€
	Given j'ai un compte épargne avec un solde de 0€
	When j'effectue un virement de 100€ du compte cheque vers le compte épargne 
	Then le solde du compte cheque est 400€
	Then le solde du compte épargne est 100€
	Then le virement est confirmé

@RG2
Scenario: Virement hors provision
	Given j'ai un compte cheque avec un solde de 50€
	Given j'ai un compte épargne avec un solde de 1000€
	When j'effectue un virement de 100€ du compte cheque vers le compte épargne 
	Then le solde du compte cheque est 50€
	Then le solde du compte épargne est 1000€
	Then le virement est refusé pour motif hors provision
	
@RG3
Scenario: Virement plafonné
	Given j'ai un compte cheque avec un solde de 1000€
	Given j'ai un compte épargne avec un solde de 0€
	Given la limite de virement est 500€
	When j'effectue un virement de 501€ du compte cheque vers le compte épargne 
	Then le solde du compte cheque est 1000€
	Then le solde du compte épargne est 0€
	Then le virement est refusé pour motif plafond dépassé


