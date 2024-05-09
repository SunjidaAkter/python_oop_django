from django.shortcuts import render
from posts.models import Post
from categories.models import Category
from django.http import Http404 
def home(request,category_slug=None):
    data=Post.objects.all()
    category=None
    if category_slug is not None:
        try:
            category = Category.objects.get(slug=category_slug)
            data = Post.objects.filter(category=category)
            print(category)
        except Category.DoesNotExist:
            # Handle the case when the category does not exist
            raise Http404("Category does not exist")
    categories=Category.objects.all()
    return render(request,'home.html',{'data':data,'categories':categories})