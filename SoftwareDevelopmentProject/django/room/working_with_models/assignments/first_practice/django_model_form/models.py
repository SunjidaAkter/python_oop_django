from django.db import models

# Create your models here.
class ModelingForm(models.Model):
    roll=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=20)
    email=models.EmailField(max_length=30)
    address=models.TextField()
    positive_integer_field = models.PositiveIntegerField()
    binary_field = models.BinaryField()
    boolean_field = models.BooleanField()
    date_field = models.DateField()
    duration_field = models.DurationField()
    decimal_field = models.DecimalField(max_digits=5, decimal_places=2)
    date_time_field = models.DateTimeField()
    file_field = models.FileField()
    generic_ip_address_field = models.GenericIPAddressField()
    float_field = models.FloatField()
    uuid_field = models.UUIDField()
    url_field = models.URLField()
    time_field = models.TimeField()
    slug_field = models.SlugField()
    time_field = models.TimeField()
    positive_integer_field = models.PositiveIntegerField()
    json_field = models.JSONField()

    def __str__(self) :
        return f"Name : {self.name}"