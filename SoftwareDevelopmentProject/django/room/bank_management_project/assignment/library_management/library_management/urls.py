from django.contrib import admin
from django.urls import path, include
from core.views import HomeView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', HomeView, name='home'),
    path('admin/', admin.site.urls),
    path('user_account/', include('user_account.urls')),
    path('books/', include('books.urls')), 
    path('borrow/', include('borrow.urls')), 
    path('category/<slug:category_slug>/',HomeView,name='category_slug' ),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)