from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .getresponce import model,vector
from .intents import intents
from django.http.response import JsonResponse
import random
@api_view(['POST'])
def index(request):
    
    token=vector.transform([request.data['query']])
    bot=model.predict(token)[0]
    for intent in intents:
        if intent['tag']==bot:
            return Response({"message":random.choices(intent['responses'])[0]},status=status.HTTP_200_OK)
    
    return Response({"message":"Bad request"},status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def getAll(request):
    data=[]
    for intent in intents:
        data.append(random.choice(intent['patterns']))
    
    return Response({'data':random.choices(data,k=5)},status=status.HTTP_200_OK)