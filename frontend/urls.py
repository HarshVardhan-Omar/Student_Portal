from django.urls import path
from .views import index,icon


urlpatterns=[
    path('',index,name="Home Page Path"),
    path('dashboard/',index),
    path('dashboard/<str:nextpath>',index),
    path('favicon.ico',icon)
]
