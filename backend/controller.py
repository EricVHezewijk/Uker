import random
from player import Player
from uker import Uker



class Controller:
    def __init__(self, players=[]):
        self.players = players



player1 = Player('Bob')
player2 = Player('James')
player3 = Player('Samantha')
player4 = Player('Josie')
playerList = [player1, player2, player3, player4]
game = Uker(playerList)
game.deal()
game.playRound()

# for player in controller.players:
#     print(player.cards)

# print
# print(len(FULLDECK))


