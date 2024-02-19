from rest_framework import status
from rest_framework.authentication import BaseAuthentication
from rest_framework.permissions import AllowAny

from rest_framework.response import Response
from rest_framework.views import APIView

class HelloWorldView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"message": "Hola Mundo"}, status=status.HTTP_200_OK)
