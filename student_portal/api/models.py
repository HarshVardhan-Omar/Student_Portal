from django.db import models

# Create your models here.

class Student(models.Model):
    user_name=models.TextField(max_length=50, default="",blank=False,unique=True)
    password=models.TextField(max_length=50, default="",blank=False,unique=False)
