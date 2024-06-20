from django.contrib import admin
from .models import UserAccount,Transaction
# Register your models here.
admin.site.register(UserAccount)
@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ['account', 'amount']
    
    