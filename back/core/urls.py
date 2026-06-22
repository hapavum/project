from django.contrib import admin
from django.urls import path, include
from core.views import login_view, register_view

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/login/', login_view),
    path('api/register/', register_view),
    path('', include('products.urls'))
]