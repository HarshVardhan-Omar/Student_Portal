from django.urls import path
from .views import index,icon


urlpatterns=[
    path('',index,name="Home Page Path"),
    path('getstudentdetails/',index),
    path('getstudentdetails/<str:nextpath>',index),
    path('favicon.ico',icon)
]
