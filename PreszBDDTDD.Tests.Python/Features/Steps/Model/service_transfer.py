class service_transfer(object):
    """description of class"""
    def __init__(self):
        self.ret = None
        self.put_object = None

    
    def doTransfer(self, amount, currentAccount, savingAccount):
        if amount <= currentAccount.balance:
            currentAccount.balance -= amount
            savingAccount.balance += amount
            self.ret = "Done"
        else:
            self.ret = "Error_Amount_Exceeded"
        return self.ret

