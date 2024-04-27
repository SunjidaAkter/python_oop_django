
from django.urls import path
from .views import add_album

urlpatterns = [
    path('add/', add_album,name='add_album'),
]
