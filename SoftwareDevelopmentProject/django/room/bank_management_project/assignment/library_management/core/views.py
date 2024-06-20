from django.shortcuts import render
from books.models import Books
from categories.models import Categories
from django.http import Http404 
def HomeView(request,category_slug=None):
    data=Books.objects.all()
    categories=None
    if category_slug is not None:
        try:
            categories = Categories.objects.get(slug=category_slug)
            data = Books.objects.filter(category=categories)
            # print(category)
        except Categories.DoesNotExist:
            # Handle the case when the category does not exist
            raise Http404("Category does not exist")
    categories=Categories.objects.all()
    return render(request,'home.html',{'Books':data,'categories':categories})