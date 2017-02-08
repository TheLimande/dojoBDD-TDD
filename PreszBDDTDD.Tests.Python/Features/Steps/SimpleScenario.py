from behave import *
from nose.tools import *
from Model.account import account
from Model.service_transfer import service_transfer

max_tranfer = 2000
svr = service_transfer(max_tranfer)
current_account = account()
saving_account = account()
  
@given(u'I have a current account with a balance of {amount:d} euros')
def step_impl(context, amount):
    current_account.balance = amount 
          
@given(u'I have a saving account with a balance of {amount:d} euros')
def step_impl(context, amount):
	saving_account.balance = amount 

@when(u'I transfer {amount:d} euros from the current account to the savings account')
def step_impl(context, amount):    
	ret = svr.doTransfer(amount, current_account, saving_account)

@then(u'the current account balance is to {balance:d} euros')
def step_impl(context, balance):
	eq_(balance, current_account.balance)

@then(u'the balance of the saving account is to {balance:d} euros')
def step_impl(context, balance):
    eq_(balance, saving_account.balance)
      
@then(u'the transfer is confirmed')
def step_impl(context):
    eq_("Done", svr.ret)



