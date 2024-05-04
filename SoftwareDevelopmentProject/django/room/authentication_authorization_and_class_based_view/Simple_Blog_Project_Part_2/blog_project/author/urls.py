
from django.urls import path
from .views import register,user_login,profile

urlpatterns = [
    path('register/', register,name='register'),
    path('login/', user_login,name='user_login'),
    path('profile/', profile,name='profile'),
]
