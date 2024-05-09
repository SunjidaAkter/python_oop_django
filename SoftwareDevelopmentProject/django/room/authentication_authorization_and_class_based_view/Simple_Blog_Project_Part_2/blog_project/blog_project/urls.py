
from django.contrib import admin
from django.urls import path,include
from .views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home,name='homepage'),
    path('category/', include('categories.urls')),
    path('category/<slug:category_slug>/', home,name='category_wise_post'),
    path('author/', include('author.urls')),
    path('post/', include('posts.urls')),
]
