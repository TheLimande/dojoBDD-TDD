class service_transfer(object):
    """description of class"""
    def __init__(self):
        self.ret = None
        self.put_object = None

    
    def doTransfer(self, amount, currentAccount, savingAccount):
        currentAccount.balance -= amount
        savingAccount.balance += amount
        self.ret = "Done"
        return self.ret

