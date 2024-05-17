from typing import Any
from django.http import HttpResponse
from django.shortcuts import render,redirect
from . import forms
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm
from django.contrib.auth import authenticate,login,logout ,update_session_auth_hash
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from posts.models import Post
from django.contrib.auth.views import LoginView,LogoutView
from django.urls import reverse_lazy
# Create your views here.
# def add_author(request):
#     author_form = forms.PasswordChangeForm()
#     if request.method == "POST":
#         author_form = forms.RegistrationForm(request.POST)  # Bind POST data to the form
#         print(author_form.is_valid())  # Check if form is valid
#         if author_form.is_valid():
#             author_form.save()
#             return redirect('add_author')
#         else:
#             print(author_form.errors)  # Print form errors for debugging
#     return render(request, 'add_author.html', {'form': author_form})

def register(request):
    register_form = forms.RegistrationForm()
    if request.method == "POST":
        register_form = forms.RegistrationForm(request.POST)  # Bind POST data to the form
        if register_form.is_valid():
            register_form.save()
            messages.success(request, "Account Has Been Registered Successfully!")
            return redirect('register')
    return render(request, 'register.html', {'form': register_form,'type':'Register'})

def user_login(request):
    # if not request.user.is_authenticated():
        form=AuthenticationForm()
        if request.method == "POST":
            form=AuthenticationForm(request,request.POST)
            if form.is_valid():
                user_name=form.cleaned_data['username']
                user_pass=form.cleaned_data['password']
                user=authenticate(username=user_name,password=user_pass)
                if user is not None:
                    messages.success(request,'Logged In Successfully!')
                    login(request,user)
                    return redirect('profile')
                else:
                    messages.warning(request,'Login Information Is Inorrect!')
                    return redirect('register')
                    
        return render(request,'register.html',{'form':form,'type':'Login'})


class UserLoginView(LoginView):
    template_name='register.html'
    # success_url=reverse_lazy('profile')
    def get_success_url(self):
        return reverse_lazy('profile')
    def form_valid(self, form):
        messages.success(self.request,'Logged In Successfully!')
        return super().form_valid(form)
    def form_invalid(self, form):
        messages.success(self.request,'Logged In Information Is Incorrect!')
        return super().form_invalid(form)
    
    def get_context_data(self, **kwargs) :
        # klk
        context=super().get_context_data(**kwargs)
        context['type']='Login'
        return context

@login_required
def profile(request):
    data=Post.objects.filter(author=request.user)
    return render(request,'profile.html',{'data':data})
@login_required
def edit_profile(request):
    profile_form = forms.ChangeUserForm(instance=request.user)
    if request.method == "POST":
        profile_form = forms.ChangeUserForm(request.POST,instance=request.user)  # Bind POST data to the form
        if profile_form.is_valid():
            profile_form.save()
            messages.success(request, "Profile Has Been Changed Successfully!")
            return redirect('profile')
    return render(request, 'update_profile.html', {'form': profile_form})

def pass_change(request):
    form = PasswordChangeForm(user=request.user)
    if request.method == "POST":
        form = PasswordChangeForm(request.user,data=request.POST)  # Bind POST data to the form
        if form.is_valid():
            form.save()
            messages.success(request, "Password Has Been Updated Successfully!")
            update_session_auth_hash(request,form.user)
            return redirect('profile')
    return render(request, 'pass_change.html', {'form': form})


def user_logout(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!")
    return redirect('user_login')
