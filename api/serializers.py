from rest_framework import serializers
from .models import Student,StoredSessions

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model=StoredSessions
        fields=["username","key"]
