from django.urls import path
from .views import main
urlpattern=[
    path('',main,name='main')
]