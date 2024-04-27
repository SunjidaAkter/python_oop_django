from django.db import models
from musician.models import Musician
# Create your models here.
class Album(models.Model):
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    CHOICES = (
        ('', 'Select the number of stars'),
        ('1','One'),
        ('2','Two'),
        ('3','Three'),
        ('4','Four'),
        ('5','Five'),
    )
    rating=models.CharField(max_length=20,choices=CHOICES)
    musician=models.ForeignKey(Musician, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name