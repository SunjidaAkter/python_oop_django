
from django.urls import path
from . import views

urlpatterns = [
    # path('',views.home),
    path('',views.set_session),
    path('get/',views.get_cookies),
    path('del/',views.delete_cookies)
]