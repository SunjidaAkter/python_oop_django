from django.shortcuts import render,redirect
from . import forms
from . import models
# Create your views here.
def add_post(request):
    post_form = forms.PostForm()
    if request.method == "POST":
        post_form = forms.PostForm(request.POST)  # Bind POST data to the form
        print(post_form.is_valid())  # Check if form is valid
        if post_form.is_valid():
            post_form.save()
            return redirect('add_post')
        else:
            print(post_form.errors)  # Print form errors for debugging
    return render(request, 'add_post.html', {'form': post_form})
def edit_post(request,id):
    post=models.Post.objects.get(pk=id)
    post_form = forms.PostForm(instance=post)
    if request.method == "POST":
        post_form = forms.PostForm(request.POST)  # Bind POST data to the form
        print(post_form.is_valid())  # Check if form is valid
        if post_form.is_valid():
            post_form.save()
            return redirect('add_post')
        else:
            print(post_form.errors)  # Print form errors for debugging
    return render(request, 'add_post.html', {'form': post_form})