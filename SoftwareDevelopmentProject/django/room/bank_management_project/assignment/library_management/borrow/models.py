from django.db import models
from django.contrib.auth.models import User
from books.models import Books
from user_account.models import UserAccount

# Create your models here.
class Borrow(models.Model):
    borrower = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING, related_name='borrowers')
    book = models.ForeignKey(Books, on_delete=models.DO_NOTHING, related_name='books')
    created_on = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.book.name} Bought By {self.buyer.username}"