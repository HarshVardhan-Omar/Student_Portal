from django.shortcuts import HttpResponse, render
from rest_framework import generics,status
import base64
from django.core.files.base import ContentFile
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from .serializers import StudentSerializer,SessionSerializer
from .models import Student,StoredSessions
from django.core.mail import send_mail

import math, random
 
# Create your views here.

def generateOTP() : # function to generate OTP
    string = '0123456789' # Declare a string variable # which stores all string
    OTP = ""
    length = len(string)
    for i in range(6) :
        OTP += string[math.floor(random.random() * length)]
    return OTP

def welcome(request):
    return HttpResponse("404 Not Found")


class StudentView(generics.ListCreateAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer

class GetStudent(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    lookup_url_kwarg_user='user_name'
    lookup_url_kwarg_pass='password'
    lookup_url_kwarg_encrypted='encryptedpassword'
    def post(self,request,format=None):

        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        username=request.data.get(self.lookup_url_kwarg_user)
        password=request.data.get(self.lookup_url_kwarg_pass)
        encryptedpassword=request.data.get(self.lookup_url_kwarg_encrypted)
        if username!=None and password!=None and encryptedpassword!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                if password == self.serializer_class(student[0]).data["password"] or encryptedpassword == self.serializer_class(student[0]).data["encryptedpassword"]:
                    sessionobject = StoredSessions(key=self.request.session.session_key, username=username)        
                    sessionobject.save()
                    datum = self.serializer_class(student[0]).data
                    return Response(datum, status=status.HTTP_200_OK)
                return Response({'Incorrect Password'},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'Bad Request:','User Does not exist'},status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request:','Request parameter Not meant'},status=status.HTTP_400_BAD_REQUEST)


class GetStudentBySession(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    session_serializer_class=SessionSerializer
    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        sessionobject = StoredSessions.objects.filter(key=self.request.session.session_key)
        if len(sessionobject)==1:
            username=self.session_serializer_class(sessionobject[0]).data["username"]
            student=Student.objects.filter(username=username)
            datum = self.serializer_class(student[0]).data
            return Response(datum, status=status.HTTP_200_OK)
        return Response({'Login Required:','No Session Found'},status=status.HTTP_204_NO_CONTENT)

class LogoutStudentBySession(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        sessionobject = StoredSessions.objects.filter(key=self.request.session.session_key)
        if sessionobject.exists():
            sessionfound = sessionobject[0]
            sessionfound.delete()
            return Response({'OK:','OK'}, status=status.HTTP_200_OK)
        return Response({'Login Required:','No Session Found'},status=status.HTTP_204_NO_CONTENT)

class ChangePassword(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    lookup_url_kwarg_user='user_name'
    lookup_url_kwarg_pass='password'
    lookup_url_kwarg_encrypted='encryptedpassword'
    lookup_url_kwarg_new_encrypted='newencryptedpassword'
    def post(self,request,format=None):
        username=request.data.get(self.lookup_url_kwarg_user)
        password=request.data.get(self.lookup_url_kwarg_pass)
        encryptedpassword=request.data.get(self.lookup_url_kwarg_encrypted)
        newencryptedpassword=request.data.get(self.lookup_url_kwarg_new_encrypted)
        if username!=None and password!=None and encryptedpassword!=None and newencryptedpassword!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                if password == self.serializer_class(student[0]).data["password"] or encryptedpassword == self.serializer_class(student[0]).data["encryptedpassword"]:
                    student[0].encryptedpassword=newencryptedpassword
                    student[0].password=None
                    student[0].save(update_fields=['encryptedpassword', 'password'])
                    return Response({'PasswordChanged'}, status=status.HTTP_200_OK)
                return Response({'Incorrect Password'},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'Bad Request:','User Does not exist'},status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request:','Request parameter Not meant'},status=status.HTTP_400_BAD_REQUEST)



class SaveDetails(APIView):
    def get(self,request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    lookup_url_kwarg_user='user_name'
    lookup_url_kwarg_details='details'
    def post(self,request,format=None):
        username=request.data.get(self.lookup_url_kwarg_user)
        details=request.data.get(self.lookup_url_kwarg_details)
        photo=request.data.get('Photo')
        sign=request.data.get('Sign')
        thumb=request.data.get('Thumb')
        if username!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:

                if ";base64," in photo:
                    format, imgstr = photo.split(';base64,') 
                    ext = format.split('/')[-1] 
                    photo = ContentFile(base64.b64decode(imgstr), name = student[0].UniversityRollNo + '.' + ext)
                    student[0].Photo = photo
                    student[0].save(update_fields=['Photo'])

                if ";base64," in thumb:
                    format, imgstr = thumb.split(';base64,') 
                    ext = format.split('/')[-1] 
                    thumb = ContentFile(base64.b64decode(imgstr), name = student[0].UniversityRollNo + '.' + ext)
                    student[0].Thumb = thumb
                    student[0].save(update_fields=['Thumb'])

                if ";base64," in sign:
                    format, imgstr = sign.split(';base64,') 
                    ext = format.split('/')[-1] 
                    sign = ContentFile(base64.b64decode(imgstr), name = student[0].UniversityRollNo + '.' + ext)
                    student[0].Sign = sign
                    student[0].save(update_fields=['Sign'])

                student.update(**details)
                data=self.serializer_class(student[0]).data
                return Response(data,status=status.HTTP_200_OK)
            return Response("Username Not Found",status=status.HTTP_401_UNAUTHORIZED)
        return Response("Request parameter not met",status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordSendMail(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    def post(self,request,format=None):
        username=request.data.get("user_name")
        if username!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                OTP = str(generateOTP())
                student[0].PasswordResetOTP = OTP
                student[0].save(update_fields = ["PasswordResetOTP"])
                if(send_mail(    'OTP Verification For Password Reset',    OTP + ' is OTP for Password Reset of Your Student Portal Account. Contact DSW, HBTU in case of any account related issues.',    'studentportalhbtu@gmail.com',    [student[0].HBTUEmail,'st-3-ncrhaov@spamtest.glockdb.com'],    fail_silently=True,)==1):
                    return Response(status=status.HTTP_200_OK)
                return Response("Mail Not Sent",status=status.HTTP_404_NOT_FOUND)
            return Response("Username Not Found",status=status.HTTP_401_UNAUTHORIZED)
        return Response("Request parameter not met",status=status.HTTP_400_BAD_REQUEST)

class ResetPasswordOTPVerification(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    def post(self,request,format=None):
        username=request.data.get("user_name")
        OTP=request.data.get("OTP")
        if username!=None and OTP!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                if OTP == student[0].PasswordResetOTP:
                    student[0].PasswordResetting = True
                    student[0].save(update_fields = ["PasswordResetting"])
                    return Response(status=status.HTTP_200_OK)
                return Response("OTP Incorrect",status=status.HTTP_401_UNAUTHORIZED)
            return Response("Username Not Found",status=status.HTTP_404_NOT_FOUND)
        return Response("Request parameter not met",status=status.HTTP_400_BAD_REQUEST)

class ResetPasswordChange(APIView):
    def get(self, request,format=None):
        return render(request,'frontend/index.html')
    serializer_class=StudentSerializer
    lookup_url_kwarg_user='user_name'
    lookup_url_kwarg_new_encrypted='newencryptedpassword'
    def post(self,request,format=None):
        username=request.data.get(self.lookup_url_kwarg_user)
        newencryptedpassword=request.data.get(self.lookup_url_kwarg_new_encrypted)
        if username!=None and newencryptedpassword!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                if student[0].PasswordResetting:
                    student[0].encryptedpassword=newencryptedpassword
                    student[0].password=None
                    student[0].PasswordResetting=False
                    student[0].save(update_fields=['encryptedpassword', 'password', 'PasswordResetting'])
                    return Response({'PasswordChanged'}, status=status.HTTP_200_OK)
                return Response({'OTP Verification Not Done'},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'Bad Request:','User Does not exist'},status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request:','Request parameter Not meant'},status=status.HTTP_400_BAD_REQUEST)


        

class SessionsView(generics.ListAPIView):
    queryset=StoredSessions.objects.all()
    serializer_class=SessionSerializer
