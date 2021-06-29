from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    about = models.TextField(null=True, blank=True)
    number = models.IntegerField(null=True, blank=True)

class Project(models.Model):
    title = models.CharField(max_length=100)
    abstract = models.CharField(max_length=200)
    link = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Skill(models.Model):
    title = models.CharField(max_length=100)
    abstract = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    
class Message(models.Model):
    email = models.TextField()
    message = models.TextField()

    def __str__(self):
        return self.email