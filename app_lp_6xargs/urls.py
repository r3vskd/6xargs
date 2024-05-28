from django.urls import path 
from .views import LandingPage
app_name="app_lp_6xargs"

urlpatterns=[
   path('', LandingPage.as_view(), name="home"),
  
]