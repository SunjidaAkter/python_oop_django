from django.db import models

# Create your models here.
from django.db import models
from user_accounts.models import UserAccounts
from menu.models import Menu
# Create your models here.

ORDER_STATUS = [
    ('Completed', 'Completed'),
    ('Pending', 'Pending'),
    ('Delivering', 'Delivering'),
]

class Order(models.Model):
    customer = models.ForeignKey(UserAccounts, on_delete = models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete = models.CASCADE)
    order_status = models.CharField(choices = ORDER_STATUS, max_length = 10, default = "Pending")
    quantity = models.IntegerField()
    created_on = models.DateField(auto_now_add=True)
    cancel = models.BooleanField(default = False)
    
    def __str__(self):
        return f"User : {self.customer.user.first_name} , Menu Item : {self.menu.title}"
    