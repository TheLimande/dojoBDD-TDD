class service_transfer(object):
    """description of class"""
    def __init__(self, max_transfer):
        self.ret = None
        self.max_transfer_amount = max_transfer 
           

    
    def doTransfer(self, amount, currentAccount, savingAccount):
        if amount <= self.max_transfer_amount:
            if amount <= currentAccount.balance:
                currentAccount.balance -= amount
                savingAccount.balance += amount
                self.ret = "Done"
            else:
                self.ret = "Error_Amount_Exceeded"
        else:
            self.ret = "Refused_Exceed_Capped_Amount"
        return self.ret

