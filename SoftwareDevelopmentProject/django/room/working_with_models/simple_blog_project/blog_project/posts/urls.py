
from django.urls import path
from posts.views import add_post,edit_post

urlpatterns = [
    path('add/', add_post,name='add_post'),
    path('edit/<int:id>', edit_post,name='edit_post'),
]
