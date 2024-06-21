from django.contrib import admin
from django.urls import path, include
from core.views import HomeView
urlpatterns = [
    path('', HomeView, name='home'),
    path('admin/', admin.site.urls),
    path('user_account/', include('user_account.urls')),
    path('books/', include('books.urls')), 
    path('borrow/', include('borrow.urls')), 
]