from rest_framework import serializers
from .models import Student, StoredSessions, Syllabus

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model=StoredSessions
        fields=["username","key"]

class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Syllabus
        fields=["Content","Branch"]
