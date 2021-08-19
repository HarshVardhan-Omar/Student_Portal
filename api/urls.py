from django.urls import path
from .views import StudentView,welcome,GetStudent

urlpatterns=[
    path('',welcome),
    path('getstudent',StudentView.as_view()),
    path('verifystudent',GetStudent.as_view()),
    path('getstudentinfo',getstudentdetails.as_view())
]
