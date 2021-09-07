from django.shortcuts import HttpResponse
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import StudentSerializer,SessionSerializer
from .models import Student,StoredSessions

# Create your views here.

def welcome(request):
    return HttpResponse("<h1>bsdk tm hamare ghar me aa gaye Nikal Laude</h1>")


class StudentView(generics.ListCreateAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer

    
class GetStudent(APIView):
    def get(self, request,format=None):
        return HttpResponse("<h1>BSDK Aukat me madarchod tmhare baap ki api ni hai</h1>")
    serializer_class=StudentSerializer
    lookup_url_kwarg_user='user_name'
    lookup_url_kwarg_pass='password'
    def post(self,request,format=None):

        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        username=request.data.get(self.lookup_url_kwarg_user)
        password=request.data.get(self.lookup_url_kwarg_pass)
        if username!=None and password!=None:
            student=Student.objects.filter(username=username)
            if len(student)==1:
                if password == self.serializer_class(student[0]).data["password"]:
                    sessionobject = StoredSessions(key=self.request.session.session_key, username=username)        
                    sessionobject.save()
                    datum = self.serializer_class(student[0]).data
                    return Response(datum, status=status.HTTP_200_OK)
                return Response({'Incorrect Password'},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'Bad Request:','User Does not exist'},status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request:','Request parameter Not meant'},status=status.HTTP_400_BAD_REQUEST)


class GetStudentBySession(APIView):
    def get(self, request,format=None):
        return HttpResponse("<h1>BSDK Aukat me madarchod tmhare baap ki api ni hai</h1>")
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
        return HttpResponse("<h1>BSDK Aukat me madarchod tmhare baap ki api ni hai</h1>")
    serializer_class=StudentSerializer
    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        sessionobject = StoredSessions.objects.filter(key=self.request.session.session_key)
        if sessionobject.exists():
            sessionfound = sessionobject[0]
            sessionfound.delete();
            return Response({'OK:','OK'}, status=status.HTTP_200_OK)
        return Response({'Login Required:','No Session Found'},status=status.HTTP_204_NO_CONTENT)

class SessionsView(generics.ListAPIView):
    queryset=StoredSessions.objects.all()
    serializer_class=SessionSerializer
