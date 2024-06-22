
from django.urls import path
from .views import UserRegistrationView,UserLoginView,UserLogoutView,UserAccountUpdateView,TransactionCreateMixin,ReturnBook
urlpatterns = [
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/',UserLoginView.as_view(),name='login'),
    path('logout/',UserLogoutView.as_view(),name='logout'),
    path('profile/', UserAccountUpdateView.as_view(), name='profile' ),
    path("deposit/", TransactionCreateMixin.as_view(), name="deposit"),
    path('return_book/<int:pk>', ReturnBook.as_view() ,name='return_book'),
]
