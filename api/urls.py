from django.urls import path
from . import views

urlpatterns = [
	path('', views.ApiOverview),
	path('admin/', views.AdminDetails),
	path('projects/', views.ProjectsDetails),
	path('skills/', views.SkillsDetails)
]