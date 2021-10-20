from django.shortcuts import HttpResponse, render
from rest_framework import generics,status
import base64
from django.core.files.base import ContentFile
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from .serializers import StudentSerializer,SessionSerializer
from .models import Student,StoredSessions

# Create your views here.

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
        if username!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                format, imgstr = photo.split(';base64,') 
                ext = format.split('/')[-1] 
                photo = ContentFile(base64.b64decode(imgstr), name='photo.' + ext)
                student[0].Photo = photo
                student[0].save(update_fields=['Photo'])
                student.update(**details)
                data=self.serializer_class(student[0]).data
                return Response(data,status=status.HTTP_200_OK)
            return Response("Username Not Found",status=status.HTTP_401_UNAUTHORIZED)
        return Response("Request parameter not met",status=status.HTTP_400_BAD_REQUEST)


class SessionsView(generics.ListAPIView):
    queryset=StoredSessions.objects.all()
    serializer_class=SessionSerializer
