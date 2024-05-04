from django.shortcuts import render,redirect
from . import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate,login,logout 
from django.contrib import messages
from django.contrib.auth.decorators import login_required
# Create your views here.
# def add_author(request):
#     author_form = forms.RegistrationForm()
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
                    return redirect('user_login')
                else:
                    messages.warning(request,'Login Information Is Inorrect!')
                    return redirect('register')
                    
        return render(request,'register.html',{'form':form,'type':'Login'})

@login_required
def profile(request):
    profile_form = forms.ChangeUserForm(instance=request.user)
    if request.method == "POST":
        profile_form = forms.ChangeUserForm(request.POST,instance=request.user)  # Bind POST data to the form
        if profile_form.is_valid():
            profile_form.save()
            messages.success(request, "Profile Has Been Changed Successfully!")
            return redirect('profile')
    return render(request, 'profile.html', {'form': profile_form})
