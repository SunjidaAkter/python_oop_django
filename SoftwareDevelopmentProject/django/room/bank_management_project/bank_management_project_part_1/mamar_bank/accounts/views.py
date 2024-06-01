from django.shortcuts import render,redirect
from django.views.generic import FormView,View
from django.contrib.auth import login ,logout
from .forms import UserRegistrationForm,UserUpdateForm
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView,LogoutView
from django.contrib import messages
# Create your views here.
class UserRegistrationView(FormView):
    template_name='accounts/user_registration.html'
    form_class=UserRegistrationForm
    success_url=reverse_lazy('register')

    def form_valid(self, form):
        user=form.save()
        login(self.request,user)
        messages.success(self.request,'Successfully Registered')
        return super().form_valid(form)

class UserLoginView(LoginView):
    template_name='accounts/user_login.html'
    def get_success_url(self):
        messages.success(self.request,'Successfully Logged in')
        return reverse_lazy('home')

class UserLogoutView(LogoutView):
    def get_success_url(self):
        if self.request.user.is_authenticated:
            logout(self.request)
            messages.success(self.request, 'You have successfully logged out')
        return reverse_lazy('home')
    
class UserBankAccountUpdateView(View):
    template_name = 'accounts/profile.html'

    def get(self, request):
        form = UserUpdateForm(instance=request.user)
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(self.request,'Bank Account Updated Successfully')
            return redirect('profile')  # Redirect to the user's profile page
        return render(request, self.template_name, {'form': form})
        