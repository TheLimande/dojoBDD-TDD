import unittest
import mock
from Model.account import account
from Model.service_transfer import service_transfer


class Test_ShouldTransferAmount(unittest.TestCase):
    def test_DebitCurrentAccount(self):
        # Arrange
        svr = service_transfer()
        current_account = account()
        saving_account = account()
        current_account.balance = 500

        # Act
        ret = svr.doTransfer(100, current_account, saving_account)
        
        # Assert
        self.assertEqual(400, current_account.balance)

      
    def test_CreditSavingAccount(self):
        
        # Arrange
        svr = service_transfer()
        current_account = account()
        saving_account = account()
        current_account.balance = 500

        # Act
        ret = svr.doTransfer(100, current_account, saving_account)
        
        # Assert
        self.assertEqual(100, saving_account.balance)
        
    def test_ReturnTransfer(self):
        svr = service_transfer()
        current_account = account()
        saving_account = account()
        current_account.balance = 500
        ret = svr.doTransfer(100, current_account, saving_account)
        self.assertEqual("Done", svr.ret)

    def test_DoNotTransferIfAmountExceeded(self):
         # Arrange
        svr = service_transfer()
        current_account = account()
        saving_account = account()
        current_account.balance = 100

        # Act
        ret = svr.doTransfer(200, current_account, saving_account)
 
        # Assert
        self.assertEqual("Error_Amount_Exceeded", svr.ret)
  
    

if __name__ == '__main__':
    unittest.main()
