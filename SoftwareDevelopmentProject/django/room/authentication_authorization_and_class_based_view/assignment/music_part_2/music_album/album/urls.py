from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.AddAlbum.as_view() ,name='add_album'),
    path('edit/<int:pk>', views.EditAlbum.as_view() ,name='edit_album'),
    path('delete/<int:pk>', views.DeleteAlbum.as_view() ,name='delete_album'),
]
