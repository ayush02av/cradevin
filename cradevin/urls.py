from django.contrib import admin
from django.urls import path

from frontend.views import *
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomePage),

    path('api/', ApiOverview),
    path('api/admin/', AdminDetails),
    path('api/projects/', ProjectsDetails),
    path('api/skills/', SkillsDetails),
    path('api/message/', NewMessage)
]