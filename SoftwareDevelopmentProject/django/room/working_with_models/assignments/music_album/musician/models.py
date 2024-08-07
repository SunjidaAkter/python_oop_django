from django.db import models

# Create your models here.
class Musician(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField()
    phone_no=models.CharField(max_length=12)
    CHOICES = (
        ('', 'Select a type'),
        ('guitar', 'Guitar'),
        ('piano', 'Piano'),
        ('violin', 'Violin'),
    )
    instrument_type = models.CharField(max_length=20, choices=CHOICES)

    def __str__(self) -> str:
        return self.first_name