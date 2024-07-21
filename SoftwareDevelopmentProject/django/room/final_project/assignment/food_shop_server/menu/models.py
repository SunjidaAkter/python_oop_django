from django.db import models
from django.contrib.auth.models import User
from patient.models import Patient
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 30)
    slug = models.SlugField(max_length = 40)
    def __str__(self):
            return self.name


# one to many --> many part e kintu foreign key add kortam
class Menu(models.Model):
    title=models.CharField(max_length=50)
    description=models.CharField(max_length=500)
    image = models.ImageField(upload_to="doctor/images/")
    category = models.ManyToManyField(Category)
    price = models.IntegerField()
    
    def __str__(self):
        return f"{self.title}"


STAR_CHOICES = [
    ('⭐', '⭐'),
    ('⭐⭐', '⭐⭐'),
    ('⭐⭐⭐', '⭐⭐⭐'),
    ('⭐⭐⭐⭐', '⭐⭐⭐⭐'),
    ('⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'),
]
class Review(models.Model):
    reviewer = models.ForeignKey(User, on_delete = models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete = models.CASCADE)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add = True)
    rating = models.CharField(choices = STAR_CHOICES, max_length = 10)
    
    def __str__(self):
        return f"User : {self.reviewer.user.first_name} ; Doctor {self.menu.title}"