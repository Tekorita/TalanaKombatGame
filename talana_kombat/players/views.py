from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Player, Movement, MovementsPlayers
from .serializers import PlayerSerializer, MovementSerializer, MovementPlayerSerializer


class PlayerListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        players = Player.objects.all()
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)

class MovementListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        movements = Movement.objects.all()
        serializer = MovementSerializer(movements, many=True)
        return Response(serializer.data)

class MovementPlayerListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        movementplayers = MovementsPlayers.objects.all()
        serializer = MovementPlayerSerializer(movementplayers, many=True)
        return Response(serializer.data)
