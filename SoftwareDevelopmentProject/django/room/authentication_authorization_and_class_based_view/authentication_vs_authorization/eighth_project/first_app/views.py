from django.shortcuts import render,redirect
from .forms import RegisterForm
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate,login,logout
# Create your views here.
def home(request):
    return render(request,'./home.html')
def signup(request):
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

def login_user(request):
    if request.method == 'POST':
        form=AuthenticationForm(request=request,data=request.POST)
        if form.is_valid():
            name=form.cleaned_data['username']
            userpass=form.cleaned_data['password']
            user=authenticate(username=name,password=userpass,userpass=userpass)
            if user is not None:
                login(request,user)
                return redirect('profile')
    else:
        form=AuthenticationForm() 
        return render(request,'./login.html',{'form':form}) 


def profile(request):
    return render(request,'./profile.html',{'user':request.user})          