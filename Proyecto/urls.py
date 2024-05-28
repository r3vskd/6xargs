
from django.contrib import admin
from django.urls import path, include
from .views import HomeView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomeView.as_view(), name="home"),
    path('app_lp_6xargs/', include('app_lp_6xargs.urls', namespace='6xargs'))
]

