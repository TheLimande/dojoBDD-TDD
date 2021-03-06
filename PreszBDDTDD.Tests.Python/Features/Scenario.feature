Feature: Management of transfer orders for Bank customer 

	Scenario: Simple transfer
		Given I have a current account with a balance of 500 euros
		Given I have a saving account with a balance of 0 euros
		When I transfer 100 euros from the current account to the savings account
		Then the current account balance is to 400 euros
		Then the balance of the saving account is to 100 euros
		Then the transfer is confirmed

	Scenario: transfer without provision
		Given I have a current account with a balance of 50 euros
		Given I have a saving account with a balance of 1000 euros
		When I transfer 100 euros from the current account to my saving account 
		Then the current account is equal to 50 euros
		Then the saving account is equal to 1000 euros
		Then the transfer is refused because not enough provision

	Scenario: Capped transfer
		Given I have a current account with a balance of 1000 euros
		Given I have a saving account with a balance of 0 euros
		Given the tranfer from account is limited to 500 euros
		When I transfer 2001 euros from the current account to my saving account
		Then the current account is equal to 1000 euros
		Then the saving account is equal to 0 euros
		Then the transfer is refused because capped tranfer is reached
