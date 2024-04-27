from django.contrib import admin
from django.urls import path,include
from .views import base

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', base,name="homepage"),
    path('musician/', include('musician.urls')),
    path('album/', include('album.urls')),
]
