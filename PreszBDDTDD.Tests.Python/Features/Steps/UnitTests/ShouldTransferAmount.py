import unittest
import mock
from Model.account import account
from Model.service_transfer import service_transfer


class Test_ShouldTransferAmount(unittest.TestCase):
    def test_DebitCurrentAccount(self):
        # Arrange
        max_transfer = 2000
        svr = service_transfer(max_transfer)
        current_account = account()
        saving_account = account()
        current_account.balance = 500

        # Act
        ret = svr.doTransfer(100, current_account, saving_account)
        
        # Assert
        self.assertEqual(400, current_account.balance)

      
    def test_CreditSavingAccount(self):
        
        # Arrange
        max_transfer = 2000
        svr = service_transfer(max_transfer)
        current_account = account()
        saving_account = account()
        current_account.balance = 500

        # Act
        ret = svr.doTransfer(100, current_account, saving_account)
        
        # Assert
        self.assertEqual(100, saving_account.balance)
        
    def test_ReturnTransfer(self):
        max_transfer = 2000
        svr = service_transfer(max_transfer)
        current_account = account()
        saving_account = account()
        current_account.balance = 500
        ret = svr.doTransfer(100, current_account, saving_account)
        self.assertEqual("Done", svr.ret)


    def test_DoNotTransferIfAmountExceeded(self):
         # Arrange
        max_transfer = 2000
        svr = service_transfer(max_transfer)
        current_account = account()
        saving_account = account()
        current_account.balance = 100

        # Act
        ret = svr.doTransfer(200, current_account, saving_account)
 
        # Assert
        self.assertEqual("Error_Amount_Exceeded", svr.ret)
  

    def test_DoNotTransferIfAmountCappedExceeded(self):
         # Arrange
        max_transfer = 2000
        svr = service_transfer(max_transfer)
        current_account = account()
        saving_account = account()
        current_account.balance = 1000
        saving_account.balance = 0
       
        # Act
        ret = svr.doTransfer(2001, current_account, saving_account)
 
        # Assert
        self.assertEqual("Refused_Exceed_Capped_Amount", svr.ret)
    
    


if __name__ == '__main__':
    unittest.main()
