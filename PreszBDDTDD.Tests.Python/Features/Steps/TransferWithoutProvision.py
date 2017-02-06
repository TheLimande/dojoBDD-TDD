from behave import *
from nose.tools import *
from Model.account import account
from Model.service_transfer import service_transfer


svr = service_transfer()
current_account = account()
saving_account = account()
  

@given(u'I have a current account with a balance of {amount:d} euros')
def step_impl(context, amount):
    current_account.balance = amount 
          
@given(u'I have a saving account with a balance of {amount:d} euros')
def step_impl(context, amount):
	saving_account.balance = amount 

@when(u'I transfer {amount:d} euros from the current account to my saving account')
def step_impl(context, amount):
    ret = svr.doTransfer(amount, current_account, saving_account)

@then(u'the current account is equal to {balance:d} euros')
def step_impl(context):
    eq_(balance, current_account.balance)

@then(u'the saving account is equal to {balance:d} euros')
def step_impl(context):
    eq_(balance, saving_account.balance)

@then(u'the transfer is refused because not enough provision')
def step_impl(context):
    eq_("Error_Amount_Exceeded", svr.ret)