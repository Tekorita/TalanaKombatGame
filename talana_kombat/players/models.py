from django.db import models


class Player(models.Model):
    """_players of kombat_"""
    name = models.CharField(max_length=100)
    perfil_player = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Movement(models.Model):
    combination = models.CharField(max_length=100)
    energy_off = models.IntegerField()
    movement_name = models.CharField(max_length=100)

    def __str__(self):
        return self.movement_name


class MovementsPlayers(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    movement = models.ForeignKey(Movement, on_delete=models.CASCADE)
