from django.urls import path
from .views import index,getAll
urlpatterns=[
    path('get/',index,name='index'),
    path('getallpatterns/',getAll)
]