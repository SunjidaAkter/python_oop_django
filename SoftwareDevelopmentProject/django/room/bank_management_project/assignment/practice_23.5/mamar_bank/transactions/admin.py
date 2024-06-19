from django.contrib import admin
from .models import Transaction
from .models import Bank
from .views import send_transaction_email
@admin.register(Bank)
class BankAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_bankrupt']
    list_editable = ['is_bankrupt']
    list_display_links = ['name']

    def save_model(self, request, obj, form, change):
        print(f"Saving: {obj.name} with is_bankrupt = {obj.is_bankrupt}")
        super().save_model(request, obj, form, change)
@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ['account', 'amount', 'balance_after_transaction', 'transaction_type', 'loan_approve']
    
    def save_model(self, request, obj, form, change):
        obj.account.balance += obj.amount
        obj.balance_after_transaction = obj.account.balance
        obj.account.save()
        send_transaction_email(obj.account.user, obj.amount, "Loan Approval", "transactions/admin_email.html")
        super().save_model(request, obj, form, change)