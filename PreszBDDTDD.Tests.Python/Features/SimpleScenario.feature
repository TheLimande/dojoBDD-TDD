Feature: Management of transfer orders for Bank customer 

	Scenario: Simple transfer
		Given I have a current account with a balance of 500 euros
		Given I have a saving account with a balance of 0 euros
		When I transfer 100 euros from the current account to the savings account
		Then the current account balance is to 400 euros
		Then the balance of the saving account is to 100 euros
		Then the transfer is confirmed