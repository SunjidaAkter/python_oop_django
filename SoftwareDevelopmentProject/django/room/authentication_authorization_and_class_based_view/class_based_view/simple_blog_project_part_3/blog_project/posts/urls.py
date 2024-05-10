
from django.urls import path
from .views import AddPostCreateView,EditPostView,DeletePostView,edit_post,add_post,delete_post

urlpatterns = [
    # path('add/', add_post,name='add_post'),
    path('add/', AddPostCreateView.as_view(),name='add_post'),
    # path('edit/<int:id>', edit_post,name='edit_post'),
    path('edit/<int:pk>/', EditPostView.as_view(),name='edit_post'),
    path('delete/<int:pk>', DeletePostView.as_view(),name='delete_post'),
]
