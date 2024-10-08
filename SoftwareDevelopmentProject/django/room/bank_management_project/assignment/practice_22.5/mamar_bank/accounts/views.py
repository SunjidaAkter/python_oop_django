from django.shortcuts import render,redirect,HttpResponseRedirect
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
        messages.success(self.request, 'User has been registered and logged in successfully')
        return super().form_valid(form)

class UserLoginView(LoginView):
    template_name='accounts/user_login.html'
    def get_success_url(self):
        return reverse_lazy('home')
    def form_valid(self, form):
        messages.success(self.request, 'You have successfully logged in')
        return super().form_valid(form)

class UserLogoutView(LogoutView):
     def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            messages.success(request, 'You have successfully logged out')
            logout(request)
        return HttpResponseRedirect(reverse_lazy('home'))
    
class UserBankAccountUpdateView(View):
    template_name = 'accounts/profile.html'

    def get(self, request):
        form = UserUpdateForm(instance=request.user)
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your profile has been updated successfully')
            return redirect('profile')  # Redirect to the user's profile page
        return render(request, self.template_name, {'form': form})
        