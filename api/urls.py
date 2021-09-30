from django.urls import path
from .views import StudentView,welcome,GetStudent,GetStudentBySession,LogoutStudentBySession,SessionsView,ChangePassword

urlpatterns=[
    path('',welcome),
    path('getstudent',StudentView.as_view()),
    path('verifystudent',GetStudent.as_view()),
    path('sessionverify',GetStudentBySession.as_view()),
    path('logoutbysession',LogoutStudentBySession.as_view()),
    path('loginsessions',SessionsView.as_view()),
    path('changepassword',ChangePassword.as_view()),
]

