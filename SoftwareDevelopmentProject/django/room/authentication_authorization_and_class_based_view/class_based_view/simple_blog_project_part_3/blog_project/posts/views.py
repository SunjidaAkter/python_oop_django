from django.shortcuts import render,redirect
from . import forms
from . import models
from django.contrib.auth.decorators import login_required
# Create your views here.
@login_required
def add_post(request):
    post_form = forms.PostForm()
    if request.method == "POST":
        post_form = forms.PostForm(request.POST)  # Bind POST data to the form
        print(post_form.is_valid())  # Check if form is valid
        if post_form.is_valid():
            post_form.instance.author = request.user
            post_form.save()
            return redirect('homepage')
        else:
            print(post_form.errors)  # Print form errors for debugging
    return render(request, 'add_post.html', {'form': post_form})
@login_required
def edit_post(request,id):
    post=models.Post.objects.get(pk=id)
    post_form = forms.PostForm(instance=post)
    if request.method == "POST":
        post_form = forms.PostForm(request.POST,instance=post)  # Bind POST data to the form
        print(post_form.is_valid())  # Check if form is valid
        if post_form.is_valid():
            post_form.instance.author = request.user
            post_form.save()
            return redirect('homepage')
        else:
            print(post_form.errors)  # Print form errors for debugging
    return render(request, 'add_post.html', {'form': post_form})

@login_required
def delete_post(request, id):
    post = models.Post.objects.get(pk=id)
    post.delete()
    return redirect('homepage')