from rest_framework import serializers
from .models import Player, Movement, MovementsPlayers


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['name']


class MovementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movement
        fields = ['combination', 'energy_off', 'movement_name']


class MovementPlayerSerializer(serializers.ModelSerializer):
    player = PlayerSerializer()
    movement = MovementSerializer()

    class Meta:
        model = MovementsPlayers
        fields = ['player', 'movement']
