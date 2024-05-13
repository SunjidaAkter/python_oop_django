
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home),
    path('get/',views.get_cookies),
    path('del/',views.delete_cookies)
]