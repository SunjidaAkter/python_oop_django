from django.shortcuts import render,redirect
from .forms import RegisterForm,ChangeUserData
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm,SetPasswordForm
from django.contrib.auth import authenticate,login,logout,update_session_auth_hash
# Create your views here.
def home(request):
    return render(request,'./home.html')
def signup(request):
    if not request.user.is_authenticated:    
        form=RegisterForm()    
        if request.method == 'POST':
            form=RegisterForm(request.POST)
            if form.is_valid():
                messages.success(request,'Account created successfully')
                # messages.warning(request,'Warning')
                # messages.info(request,'Information')
                form.save(commit=False)
                print(form.cleaned_data)
        return render(request, './signup.html',{'form':form})
    else:
        return redirect('profile')
def login_user(request):
    if not request.user.is_authenticated:
        if request.method == 'POST':
            form=AuthenticationForm(request=request,data=request.POST)
            if form.is_valid():
                name=form.cleaned_data['username']
                userpass=form.cleaned_data['password']
                user=authenticate(username=name,password=userpass,userpass=userpass)
                if user is not None:
                    login(request,user)
                    return redirect('profile')
                # else:
                #     messages.error(request,'Invalid credentials')
                #     return render(request,'./login.html',{'form':form}) 
        else:
            form=AuthenticationForm() 
        return render(request,'./login.html',{'form':form}) 
    else:
        return redirect('profile')

def profile(request):
    if request.user.is_authenticated:    
        form=ChangeUserData(instance=request.user)    
        if request.method == 'POST':
            form=ChangeUserData(request.POST,instance=request.user)
            if form.is_valid():
                messages.success(request,'Account updated successfully')
                # messages.warning(request,'Warning')
                # messages.info(request,'Information')
                form.save()
                print(form.cleaned_data)
        return render(request, './profile.html',{'form':form})
    else:
        return redirect('signup')     

def logout_user(request):
    logout(request)
    return redirect('login')

def pass_change(request):
    if request.user.is_authenticated:
        if request.method == 'POST':
            form=PasswordChangeForm(user=request.user,data=request.POST)
            if form.is_valid():
                form.save()
                update_session_auth_hash(request,form.user)
                messages.success(request,'Password changed successfully')
                return redirect('profile')
        else:
            form=PasswordChangeForm(user=request.user)
        return render(request,'./passchange.html',{'form':form})    
    else:
        return redirect('login')
def pass_change2(request):
    if request.user.is_authenticated:
        if request.method == 'POST':
            form=SetPasswordForm(user=request.user,data=request.POST)
            if form.is_valid():
                form.save()
                update_session_auth_hash(request,form.user)
                messages.success(request,'Password changed successfully')
                return redirect('profile')
        else:
            form=SetPasswordForm(user=request.user)
        return render(request,'./passchange.html',{'form':form})    
    else:
        return redirect('login')
    

def change_user_data(request):
    if request.user.is_authenticated:    
        form=ChangeUserData()    
        if request.method == 'POST':
            form=ChangeUserData(request.POST,isinstance=request.user)
            if form.is_valid():
                messages.success(request,'Account updated successfully')
                # messages.warning(request,'Warning')
                # messages.info(request,'Information')
                form.save(commit=False)
                print(form.cleaned_data)
        return render(request, './profile.html',{'form':form})
    else:
        return redirect('signup')    