from django.shortcuts import render
from user_account.models import UserAccount
from books.models import Books
from categories.models import Categories
from django.http import Http404 
def HomeView(request,category_slug=None):
    if request.user.is_authenticated:
        data=Books.objects.all()
        categories=None
        user_account=UserAccount.objects.get(user=request.user)
        gender=user_account.gender
        print(gender,"checking")
        if category_slug is not None:
            try:
                categories = Categories.objects.get(slug=category_slug)
                data = Books.objects.filter(categories=categories)
                # print(category)
            except Categories.DoesNotExist:
                # Handle the case when the category does not exist
                raise Http404("Category does not exist")
        categories=Categories.objects.all()
        return render(request,'index.html',{'books':data,'categories':categories,'gender':gender})
    else:
        data=Books.objects.all()
        categories=Categories.objects.all()
        return render(request,'index.html',{'books':data,'categories':categories})