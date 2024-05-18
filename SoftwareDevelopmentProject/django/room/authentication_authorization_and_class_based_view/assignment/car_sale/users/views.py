from .forms import RegisterForm
from django.views.generic import FormView
from django.urls import reverse_lazy
from django.contrib import messages
from django.contrib.auth.views import LoginView,LogoutView
# Create your views here.

class UserSignupView(FormView):
    template_name = 'register.html'
    form_class = RegisterForm
    success_url = reverse_lazy('signin')
    def form_valid(self, form):
        form.save()
        messages.success(self.request,'Account Has been registered successfully!')
        return super().form_valid(form)
    def get_context_data(self, **kwargs) :
        context=super().get_context_data(**kwargs)
        context['type']='Register'
        return context


class UserSigninView(LoginView):
    template_name = 'register.html'
    def get_success_url(self):
        return reverse_lazy('home')    
    def form_valid(self, form):
        messages.success(self.request,'User has been logged in successfully!')
        return super().form_valid(form)
    def get_context_data(self, **kwargs) :
        context=super().get_context_data(**kwargs)
        context['type']='Login'
        return context


class UserSignoutView(LogoutView):
    next_page=reverse_lazy('home')
    def dispatch(self, request, *args, **kwargs):
        messages.success(request, 'User has been logged out successfully!')
        return super().dispatch(request, *args, **kwargs)