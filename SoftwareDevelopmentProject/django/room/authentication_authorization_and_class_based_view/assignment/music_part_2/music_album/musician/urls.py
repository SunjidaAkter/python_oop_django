
from django.urls import path
from .views import AddMusician,EditMusician

urlpatterns = [
    path('add/', AddMusician.as_view() ,name='add_musician'),
    path('edit/<int:pk>', EditMusician.as_view() ,name='edit_musician'),
]
