from django.shortcuts import render,redirect
from . import forms
from . import models
from django.urls import reverse_lazy
from django.views.generic import CreateView,UpdateView,DeleteView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
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

# add post using class based view 
@method_decorator(login_required,name='dispatch')
class AddPostCreateView(CreateView):
    model = models.Post
    form_class = forms.PostForm
    template_name = 'add_post.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        form.instance.author=self.request.user
        return super().form_valid(form)

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

# edit post using class based view
@method_decorator(login_required,name='dispatch')
class EditPostView(UpdateView):
    model = models.Post
    form_class = forms.PostForm
    template_name = 'add_post.html'
    # pk_url_kwargs = 'id'
    success_url=reverse_lazy('profile')



@login_required
def delete_post(request, id):
    post = models.Post.objects.get(pk=id)
    post.delete()
    return redirect('homepage')

# delete post using class based view
@method_decorator(login_required,name='dispatch')
class DeletePostView(DeleteView):
    model = models.Post
    template_name = 'delete.html'
    # pk_url_kwargs = 'id'
    success_url=reverse_lazy('profile')