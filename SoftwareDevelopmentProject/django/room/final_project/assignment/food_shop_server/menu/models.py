from django.db import models
from django.contrib.auth.models import User
from django.db.models import Avg
import math

class Category(models.Model):
    name = models.CharField(max_length=30)
    slug = models.SlugField(max_length=40)
    
    def __str__(self):
        return self.name

class Cuisine(models.Model):
    name = models.CharField(max_length=30)
    slug = models.SlugField(max_length=40)
    
    def __str__(self):
        return self.name

class Menu(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to="menu/images/")
    category = models.ForeignKey(Category, on_delete=models.CASCADE,null=True, blank=True)
    cuisine = models.ManyToManyField(Cuisine)
    price = models.IntegerField()
    quantity = models.IntegerField()
    rating = models.IntegerField(default=1)  # Default rating set to 1

    def __str__(self):
        return self.title

    def update_rating(self):
        """Calculates and updates the average rating as an integer based on related reviews."""
        average_rating = self.review_set.aggregate(Avg('rating'))['rating__avg']
        if average_rating is not None:
            self.rating = math.floor(average_rating + 0.5)  # Round to the nearest integer
        else:
            self.rating = 1  # Default to 1 if no reviews
        self.save()

class Review(models.Model):
    reviewer = models.ForeignKey(User, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    title=models.CharField(max_length=50,null=True, blank=True)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(default=1)  # Ensure rating is an integer field
    
    def __str__(self):
        return f"User: {self.reviewer.first_name} ; Menu: {self.menu.title}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.menu.update_rating()  # Update menu rating whenever a review is saved
