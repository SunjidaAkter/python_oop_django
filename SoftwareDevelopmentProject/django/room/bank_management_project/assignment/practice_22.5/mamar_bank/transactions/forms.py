from typing import Any
from django import forms
from .models import Transaction,Bank
from django import forms
from accounts.models import UserBankAccount

class TransactionForm(forms.ModelForm):
    class Meta:
        model = Transaction
        fields = [
            'amount',
            'transaction_type'
        ]

    def __init__(self, *args, **kwargs):
        self.account = kwargs.pop('account') # account value ke pop kore anlam
        super().__init__(*args, **kwargs)
        self.fields['transaction_type'].disabled = True # ei field disable thakbe
        self.fields['transaction_type'].widget = forms.HiddenInput() # user er theke hide kora thakbe

    def save(self, commit=True):
        self.instance.account = self.account
        self.instance.balance_after_transaction = self.account.balance
        return super().save()

class TransferForm(TransactionForm):
    class Meta:
        model = Transaction
        fields = [
            'amount',
            'transaction_type',
            'to_account'
        ]
    def clean_amount(self):     
       if Bank.objects.first().is_bankrupt:
            raise forms.ValidationError(f'The bank is bankrupt, no withdrawals allowed.')
       amount=self.cleaned_data.get('amount')
       if amount > self.account.balance:
           raise forms.ValidationError(
               f'You have {self.account.balance} $ in your account. '
               'You can not transfer more than your account balance'
           )
       return amount 
class DepositForm(TransactionForm):
    def clean_amount(self): # amount field ke filter korbo
        min_deposit_amount = 100
        amount = self.cleaned_data.get('amount') # user er fill up kora form theke amra amount field er value ke niye aslam, 50
        if amount < min_deposit_amount:
            raise forms.ValidationError(
                f'You need to deposit at least {min_deposit_amount} $'
            )
        return amount


class WithdrawForm(TransactionForm):

    def clean_amount(self):
        bank, created = Bank.objects.get_or_create()
        print(Bank.objects.get().is_bankrupt)
        # Check if the bank is bankrupt
        if bank.is_bankrupt:
            raise forms.ValidationError('The bank is bankrupt, no withdrawals allowed.')

        account = self.account
        min_withdraw_amount = 500
        max_withdraw_amount = 20000
        balance = account.balance # 1000
        amount = self.cleaned_data.get('amount')
        if amount < min_withdraw_amount:
            raise forms.ValidationError(
                f'You can withdraw at least {min_withdraw_amount} $'
            )

        if amount > max_withdraw_amount:
            raise forms.ValidationError(
                f'You can withdraw at most {max_withdraw_amount} $'
            )

        if amount > balance: # amount = 5000, tar balance ache 200
            raise forms.ValidationError(
                f'You have {balance} $ in your account. '
                'You can not withdraw more than your account balance'
            )

        return amount



class LoanRequestForm(TransactionForm):
    def clean_amount(self):
        amount = self.cleaned_data.get('amount')

        return amount


