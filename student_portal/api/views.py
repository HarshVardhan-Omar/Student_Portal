from django.shortcuts import HttpResponse
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import StudentSerializer,StudentVerifySerializer
from .models import Student

# Create your views here.

def welcome(request):
    return HttpResponse("<h1>Welcome To Backend</h1>")


class StudentView(generics.ListAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer

class GetStudent(APIView):
    lookup_url_kwarg='user_name'
    lookup_url_kwarg_pass='password'
    def post(self,request,format=None):
        user_name=request.data.get(self.lookup_url_kwarg)
        password=request.data.get(self.lookup_url_kwarg_pass)
        if user_name!=None and password!=None:
            student=Student.objects.filter(user_name=user_name)
            student1=Student.objects.filter(password=password)
            if len(student)>0 and len(student1)>0:
                data=student[0]
                return Response({'User Authenticated'},status=status.HTTP_200_OK)
            return Response({'Bad Request:','User Does not exist'},status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad Request:','Request parameter Not meant'},status=status.HTTP_401_UNAUTHORIZED)


class GetStudentView(APIView):
    serializer_class=StudentVerifySerializer

    def post(self,request,formamt=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            user_name=serializer.data.get('user_name')
            password=serializer.data.get('password')
            queryset=Student.objects.filter(user_name=user_name)
            if queryset.exists():
                student=queryset[0]
                return Response(StudentSerializer(student).data,status=status.HTTP_200_OK)
            else:
                return Response({'Bad Request:','User Does Not Exist'},status=status.HTTP_400_BAD_REQUEST)

