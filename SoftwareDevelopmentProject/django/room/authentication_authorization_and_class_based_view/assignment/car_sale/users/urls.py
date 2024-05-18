
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.UserSignupView.as_view() ,name='signup'),
    path('signin/', views.UserSigninView.as_view() ,name='signin'),
    path('signout/', views.UserSignoutView.as_view() ,name='signout'),
]
