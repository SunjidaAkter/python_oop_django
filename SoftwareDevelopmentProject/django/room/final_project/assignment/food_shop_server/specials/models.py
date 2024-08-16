from django.db import models

# Create your models here.
from django.db import models
from menu.models import Menu
# Create your models here.

class Specials(models.Model):
    menu = models.ForeignKey(Menu, on_delete = models.CASCADE)
    discount = models.IntegerField()
    
    def __str__(self):
        return f"Item : {self.menu.title}"
    