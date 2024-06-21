from django.shortcuts import render,redirect,HttpResponseRedirect
from django.views.generic import FormView,View
from django.contrib.auth import login ,logout
from .forms import UserRegistrationForm,UserUpdateForm,TransactionForm
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView,LogoutView
from django.contrib import messages
from django.contrib.auth.views import PasswordChangeView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from .models import UserAccount,Transaction
from django.views.generic import CreateView,DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
# *-------------------------------------------------------------------------------------------
from django.utils import timezone
from django.views import View
from datetime import datetime
from django.db.models import Sum
from borrow.models import Borrow


# Create your views here.
def send_transaction_email_password(user, subject, template):
        message = render_to_string(template, {
            'user' : user,
        })
        send_email = EmailMultiAlternatives(subject, '', to=[user.email])
        send_email.attach_alternative(message, "text/html")
        send_email.send()

class UserRegistrationView(FormView):
    template_name='accounts/user_registration.html'
    form_class=UserRegistrationForm
    success_url=reverse_lazy('register')

    def form_valid(self, form):
        user=form.save()
        login(self.request,user)
        return super().form_valid(form)

class UserLoginView(LoginView):
    template_name='accounts/user_login.html'
    def get_success_url(self):
        messages.success(self.request, 'You have successfully logged in')
        return reverse_lazy('home')

class UserLogoutView(LogoutView):
     def dispatch(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            logout(self.request)
            messages.success(self.request, 'You have successfully logged out')
        return HttpResponseRedirect(reverse_lazy('home'))
    
class UserAccountUpdateView(View):
    template_name = 'accounts/profile.html'

    def get(self, request):
        form = UserUpdateForm(instance=request.user)
        try:
            user_account = UserAccount.objects.get(user=request.user)
        except UserAccount.DoesNotExist:
            user_account = None
        borrows = Borrow.objects.filter(borrower=user_account)
        print(user_account.gender)
        context = {
            'form': form,
            'user_account': user_account,
            'borrows': borrows,
        }
        return render(request, self.template_name, context)

    def post(self, request):
        form = UserUpdateForm(request.POST, instance=request.user)
        user_account = UserAccount.objects.filter(user=request.user)
        borrows = Borrow.objects.filter(borrower=request.user_account)
        if form.is_valid():
            form.save()
            messages.success(request, "Profile updated successfully.")
            return redirect('profile')
        context = {
            'form': form,
            'user_account': user_account,
            'borrows': borrows,
        }
        return render(request, self.template_name, context)
    
class CustomPasswordChangeView(LoginRequiredMixin, PasswordChangeView):
    template_name = 'accounts/password_change.html'
    success_url = reverse_lazy('profile')

    def form_valid(self, form):
        messages.success(self.request, 'Password has been changed successfully!')
        send_transaction_email_password(self.request.user, "Reset Password", "accounts/password_change_email.html")
        return super().form_valid(form)        
def send_transaction_email(user, amount, subject, template):
        message = render_to_string(template, {
            'user' : user,
            'amount' : amount,
        })
        send_email = EmailMultiAlternatives(subject, '', to=[user.email])
        send_email.attach_alternative(message, "text/html")
        send_email.send()

class TransactionCreateMixin(LoginRequiredMixin, CreateView):
    template_name = 'transactions/transaction_form.html'
    model = Transaction
    title = 'Deposit'
    success_url = reverse_lazy('profile')
    form_class = TransactionForm

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs.update({
            'account': self.request.user.account
        })
        return kwargs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs) # template e context data pass kora
        context.update({
            'title': self.title
        })

        return context
    def form_valid(self, form):
        amount = form.cleaned_data.get('amount')
        account = self.request.user.account
        # if not account.initial_deposit_date:
        #     now = timezone.now()
        #     account.initial_deposit_date = now
        account.balance += amount # amount = 200, tar ager balance = 0 taka new balance = 0+200 = 200
        account.save(
            update_fields=[
                'balance'
            ]
        )

        messages.success(
            self.request,
            f'{"{:,.2f}".format(float(amount))}$ was deposited to your account successfully'
        )
        # send_transaction_email(self.request.user, amount, "Deposite Message", "transactions/deposite_email.html")
        return super().form_valid(form)


class ReturnBook(DeleteView):
    model = Borrow
    template_name='accounts/return_book.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        book_price=self.get_object().book.price
        user_account=UserAccount.objects.filter(user=self.request.user)
        user_account.balance=user_account.balance+book_price
        user_account.save()
        messages.success(self.request,f"{self.get_object().book.title} has been returned successfully!")
        return super().form_valid(form)