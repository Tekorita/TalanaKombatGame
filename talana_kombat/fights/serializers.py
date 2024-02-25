from rest_framework import serializers


class PlayerSerializer(serializers.Serializer):
    movimientos = serializers.ListField(child=serializers.CharField())
    golpes = serializers.ListField(child=serializers.CharField())

class GameSerializer(serializers.Serializer):
    player1 = PlayerSerializer()
    player2 = PlayerSerializer()
