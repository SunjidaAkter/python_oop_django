from django.db import models

class Bank(models.Model):
    is_bankrupt = models.BooleanField(default=False)

    def __str__(self):
        return "Bank Status"