
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('first_app/', include('practice_app.urls')),
    path('', views.home),
]
