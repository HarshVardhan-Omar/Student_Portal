from django.db import models

# Create your models here.

class Student(models.Model):
    username=models.TextField(max_length=50, default="",null=False,unique=True)
    password=models.TextField(max_length=40,null=False,unique=False)
