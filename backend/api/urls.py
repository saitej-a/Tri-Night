from django.urls import path
from .views import index
urlpatterns=[
    path('get/<str:st>',index,name='index')
]