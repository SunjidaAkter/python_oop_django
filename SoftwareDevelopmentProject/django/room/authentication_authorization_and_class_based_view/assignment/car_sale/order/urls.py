from django.urls import path
from . import views

urlpatterns = [
    path('create_order/<int:id>', views.buyCar, name='create_order')
]