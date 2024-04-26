from django.urls import path
from .views import model_form
urlpatterns = [
    path('', model_form , name='model_form'),
]
