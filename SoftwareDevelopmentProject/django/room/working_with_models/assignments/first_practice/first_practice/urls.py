from django.contrib import admin
from django.urls import path,include
from .views import home
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home , name='homepage'),
    path('form', include('django_form.urls')),
    # path('model_form', include('django_model_form.urls')),
]
