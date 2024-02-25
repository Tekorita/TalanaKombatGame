from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import GameSerializer


class GameView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            response_data = self.process_moves(serializer.validated_data)
            return Response(response_data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def process_moves(self, data):
        response = {'player1': self.process_player_moves(data['player1']),
                    'player2': self.process_player_moves(data['player2'])}
        return response

    def process_player_moves(self, player_data):
        movements = player_data.get('movimientos', [])
        punches = player_data.get('golpes', [])
        
        movement_description = []
        for move in movements:
            if move == 'D':
                movement_description.append('Stalone avanza')
            elif move == 'S':
                movement_description.append('Tony se agacha')

        punch_description = []
        for punch in punches:
            if punch == 'K':
                punch_description.append('da un puño')

        result = ' '.join(movement_description)
        if punch_description:
            result += ' y ' + ' '.join(punch_description)

        return result
    