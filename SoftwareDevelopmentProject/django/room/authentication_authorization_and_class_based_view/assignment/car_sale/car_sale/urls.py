from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home,name='home'),
    path('brand/<slug:brand_slug>/',views.home,name='brand_slug' ),
    # path('car/',include('car.urls')),
    # path('brand/',include('brand.urls')),
    path('users/',include('users.urls')),
]
