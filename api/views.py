from django.shortcuts import render, redirect
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *

from .models import *

@api_view(['GET'])
def ApiOverview(request):
	api_urls = {
		'Admin Details':'/admin/',
		'Projects Details':'/projects/',
		'Skills Details':'/skills/',
		'New Message':'/message/'
	}
	return Response(api_urls)

@api_view(['GET'])
def AdminDetails(request):
	admin = User.objects.get(username='admin')
	serializer = AdminSerializer(admin, many=False)
	return Response(serializer.data)

@api_view(['GET'])
def ProjectsDetails(request):
	projects = Project.objects.all()
	serializer = ProjectSerializer(projects, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def SkillsDetails(request):
	skills = Skill.objects.all()
	serializer = SkillSerializer(skills, many=True)
	return Response(serializer.data)

@api_view(['POST'])
def NewMessage(request):
	try:
		Message(email=request.data['email'], message=request.data['message']).save()
	except:
		pass
	return redirect(ApiOverview)