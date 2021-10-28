from django.urls import path
from .views import StudentView,welcome,GetStudent,GetStudentBySession,LogoutStudentBySession,SessionsView,ChangePassword,SaveDetails,ResetPasswordSendMail,ResetPasswordOTPVerification,ResetPasswordChange

urlpatterns=[
    path('',welcome),
    path('getstudent',StudentView.as_view()),
    path('verifystudent',GetStudent.as_view()),
    path('sessionverify',GetStudentBySession.as_view()),
    path('logoutbysession',LogoutStudentBySession.as_view()),
    path('loginsessions',SessionsView.as_view()),
    path('changepassword',ChangePassword.as_view()),
    path('savedetails',SaveDetails.as_view()),
    path('resetpasswordsendmail',ResetPasswordSendMail.as_view()),
    path('resetpasswordotpverification',ResetPasswordOTPVerification.as_view()),
    path('resetpasswordchange',ResetPasswordChange.as_view()),
]

