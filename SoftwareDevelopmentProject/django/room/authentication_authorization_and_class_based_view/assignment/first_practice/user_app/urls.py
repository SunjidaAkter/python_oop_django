
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup,name='signup'),
    path('signin/', views.signin,name='signin'),
    path('signout/', views.signout,name='signout'),
    path('profile/', views.profile,name='profile'),
    path('reset_password/', views.reset_password,name='reset_password'),
    path('password_reset/', views.password_reset,name='password_reset'),
]
