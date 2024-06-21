from django.shortcuts import redirect
from django.contrib import messages
from . import forms
from . import models
from borrow.models import Borrow
from user_account.models import UserAccount
from django.urls import reverse_lazy
from django.views.generic import DetailView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
# Create your views here.


class DetailsBookView(DetailView):
    model = models.Books
    template_name='book_detail.html'
    
    def post(self, request, *args, **kwargs):
        self.object = self.get_object()  # Retrieve the car object
        review_form = forms.ReviewForm(data=self.request.POST)
        user_accout=UserAccount.objects.filter(user=self.request)
        borrow=Borrow.objects.filter(borrower=user_accout)
        ok=False
        for obj in borrow.objects.all():
            if obj.book==self.object:
                ok=True
        if not ok:
            messages.error(self.request,"You have to borrow this book for giving review")
            return redirect('book_detail', pk=self.object.pk)
        else:        
            if review_form.is_valid():
                new_review = review_form.save(commit=False)
                new_review.books = self.object  # Assign the car to the comment
                first_name = request.user.first_name
                last_name = request.user.last_name
                new_review.name = f'{first_name} {last_name}'  # Assign the car to the comment
                new_review.save()
                messages.success(self.request,"Comment Has Been Added Successfully!")
                # Redirect to the same page to avoid re-posting the comment
                return redirect('book_detail', pk=self.object.pk)
            else:
                return self.get(request, *args, **kwargs)  

    def get_context_data(self,**kwargs) :
        context=super().get_context_data(**kwargs)
        books=self.object
        reviews=books.reviews.all()
        review_form=forms.ReviewForm()
        context['reviews']=reviews
        context['review_form']=review_form        
        return context


