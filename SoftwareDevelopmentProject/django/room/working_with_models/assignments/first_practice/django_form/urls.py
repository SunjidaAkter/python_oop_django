from django.urls import path,include
from .views import form
urlpatterns = [
    path('', form , name='form'),
]
