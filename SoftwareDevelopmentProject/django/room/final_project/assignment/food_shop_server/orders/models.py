from django.db import models

# Create your models here.
from django.db import models
from user_accounts.models import UserAccounts
from menu.models import Menu
# from django.contrib.auth.models import User
# Create your models here.

ORDER_STATUS = [
    ('Paid', 'Paid'),
    ('Pending', 'Pending'),
    ('Delivering', 'Delivering'),
    ('Unordered', 'Unordered'),
]
STATUS_CHOICES = [
    ('Pending', 'Pending'),
    ('Completed', 'Completed'),
    ('Failed', 'Failed'),
    ('Cancelled', 'Cancelled'),
]
class Order(models.Model):
    customer = models.ForeignKey(UserAccounts, on_delete = models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete = models.CASCADE)
    order_status = models.CharField(choices = ORDER_STATUS, max_length = 10, default = "Unordered")
    address = models.CharField(max_length =100,null=True, blank=True )
    mobile = models.CharField(max_length =100,null=True, blank=True )
    quantity = models.IntegerField()
    payment_url= models.URLField(max_length=100, blank=True, null=True)
    transaction_id= models.CharField(max_length=100, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    cost=models.IntegerField(default=0)
    total_cost=models.IntegerField(default=0)
    payment_status = models.CharField(choices = STATUS_CHOICES, max_length = 10, default = "Pending",null=True,blank=True)
    # is_paid = models.BooleanField(default = False)

    def __str__(self):
        return f"User : {self.customer.user.first_name} , Menu Item : {self.menu.title}"
    