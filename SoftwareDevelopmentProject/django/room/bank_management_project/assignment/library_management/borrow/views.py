from django.http.response import HttpResponse as HttpResponse
from django.shortcuts import redirect,get_object_or_404
from .models import Borrow
from books.models import Books
from django.contrib import messages
from django.contrib.auth.decorators import login_required

@login_required
def borrow_book(request, id):
    if request.method == 'POST':
        book = get_object_or_404(Books, pk=id)
        Borrow.objects.create(borrower=request.user, book=book)
        messages.success(request, f"{book.title} has been purchased successfully!")
        borrow=Borrow.objects.get(borrower=request.user)
        return redirect('book_detail', pk=book.pk)
    