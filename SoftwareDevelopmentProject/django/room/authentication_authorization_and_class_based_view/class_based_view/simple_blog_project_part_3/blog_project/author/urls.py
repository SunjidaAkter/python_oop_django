
from django.urls import path
from .views import register,UserLoginView,profile,pass_change,edit_profile,user_logout
urlpatterns = [
    path('register/', register,name='register'),
    # path('login/', user_login,name='user_login'),
    path('login/', UserLoginView.as_view(),name='user_login'),
    path('logout/', user_logout,name='user_logout'),
    path('profile/', profile,name='profile'),
    path('profile/edit', edit_profile,name='edit_profile'),
    path('profile/edit/pass_change', pass_change,name='pass_change'),
]
