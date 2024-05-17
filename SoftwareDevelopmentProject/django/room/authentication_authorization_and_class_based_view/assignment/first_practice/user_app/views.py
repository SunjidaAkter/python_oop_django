from django.shortcuts import render,redirect
from .forms import SignupForm,ProfileForm
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm,SetPasswordForm
from django.contrib.auth import login,logout,authenticate,update_session_auth_hash
from django.contrib import messages
# Create your views here.
def signup(request):
    if not request.user.is_authenticated:
        form = SignupForm()
        print(request.method)
        if request.method == 'POST':
            form = SignupForm(request.POST)
            if form.is_valid():
                form.save()
                messages.success(request, 'Your account has been created successfully!')
                return redirect('signin')
        return render(request, 'register.html', {'form': form,'type':'Signup'})
    else:
        return redirect('profile')
    
def signin(request):
    if not request.user.is_authenticated:
        form = AuthenticationForm()
        if request.method == 'POST':
            form = AuthenticationForm(data=request.POST)
            if form.is_valid():
                name = form.cleaned_data['username']
                userpass = form.cleaned_data['password']
                user = authenticate(username=name, password=userpass)
                login(request, user)
                messages.success(request, 'You have been logged in successfully!')
                return redirect('profile')
        return render(request, './register.html', {'form': form,'type':'Signin'})
    else:
        return redirect('profile')

def profile(request):
    if request.user.is_authenticated:
        form = ProfileForm(instance=request.user)
        if request.method == 'POST':
            form = ProfileForm(request.POST, instance=request.user)
            if form.is_valid():
                form.save()
                messages.success(request, 'Your profile has been updated successfully!')
        return render(request, './profile.html', {'form': form})
    else:
        return redirect('signin')
    

def password_reset(request):
    if request.user.is_authenticated:
        form = PasswordChangeForm(user=request.user)
        if request.method == 'POST':
            form = PasswordChangeForm(user=request.user,data=request.POST)
            if form.is_valid():
                form.save()
                update_session_auth_hash(request, form.user)
                messages.success(request, 'Password has been changed successfully!')
        return render(request, './password_change.html', {'form': form,'type':'Reset Password With Old Password'})
    else:
        return redirect('signin')

def reset_password(request):
    if request.user.is_authenticated:
        form = SetPasswordForm(user=request.user)
        if request.method == 'POST':
            form = SetPasswordForm(user=request.user,data=request.POST)
            if form.is_valid():
                form.save()
                update_session_auth_hash(request, form.user)
                messages.success(request, 'Password has been changed successfully!')
        return render(request, './password_change.html', {'form': form,'type':'Reset Password Without Old Password'})
    else:
        return redirect('signin')
    

def signout(request):
    logout(request)
    messages.success(request, 'You have been logged out successfully!')
    return redirect('home')    