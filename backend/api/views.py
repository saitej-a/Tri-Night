from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .getresponce import model,vector
from .intents import intents
from django.http.response import JsonResponse
import random
@api_view(['GET'])
def index(request,st):
    token=vector.transform([st])
    bot=model.predict(token)[0]
    for intent in intents:
        if intent['tag']==bot:
            return Response({"message":random.choices(intent['responses'])[0]},status=status.HTTP_200_OK)
    
    return Response({"message":"Bad request"},status=status.HTTP_400_BAD_REQUEST)