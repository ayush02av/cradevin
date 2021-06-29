from rest_framework import serializers

from .models import *

class AdminSerializer(serializers.ModelSerializer):
	class Meta(object):
		model = User
		fields = (
			'first_name',
			'last_name',
			'about',
			'email',
			'number',
		)

class ProjectSerializer(serializers.ModelSerializer):
	class Meta(object):
		model = Project
		fields = (
			'title',
			'abstract',
			'link'
		)

class SkillSerializer(serializers.ModelSerializer):
	class Meta(object):
		model = Skill
		fields = (
			'title',
			'abstract'
		)

class NewMessageSerializer(serializers.ModelSerializer):
	class Meta(object):
		model = Message
		fields = (
			'email',
			'message'
		)