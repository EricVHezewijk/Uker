import sys
import random


cardMap = {
    '6♠' : 6, '7♠' : 7, '8♠' : 8, '9♠' : 9, '10♠' : 10, 'J♠' : 11, 'Q♠' : 12, 'K♠' : 13, 'A♠' : 14, 
    '6♣' : 6, '7♣' : 7, '8♣' : 8, '9♣' : 9, '10♣' : 10, 'J♣' : 11, 'Q♣' : 12, 'K♣' : 13, 'A♣' : 14, 
    '6♥' : 6, '7♥' : 7, '8♥' : 8, '9♥' : 9, '10♥' : 10, 'J♥' : 11, 'Q♥' : 12, 'K♥' : 13, 'A♥' : 14, 
    '6✦' : 6, '7✦' : 7, '8✦' : 8, '9✦' : 9, '10✦' : 10, 'J✦' : 11, 'Q✦' : 12, 'K✦' : 13, 'A✦' : 14
}

suitMap = {
    '♠' : '♣',
    '♣' : '♠',
    '♥' : '✦',
    '✦' : '♥'
}

deck = [
    'A♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
    'A♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A✦', '6✦', '7✦', '8✦', '9✦', '10✦', 'J✦', 'Q✦', 'K✦'
]


def clearInput():
    sys.stdout.write("\033[F")  # Move cursor up
    sys.stdout.write("\033[K")  # Clear line


class Uker:

    def __init__(self, players):
        self.players = players
        self.dealerIndex = 0
        self.dealer = self.players[self.dealerIndex]
        self.deck = deck.copy()
        self.playedCards = []
        self.trumpSuit = ''
        self.currentSuit = ''
        self.winner = ''


    def playRound(self):

        # Loop through players
        for i in range(0, 4):

            # Index of current player
            index = ((self.dealerIndex + i) % len(self.players))
            player = self.players[index]

            # Start current player turn
            confirmed = False
            print(f"{player.name}'s turn")
            print("Your hand:")

            # Print player's hand
            for cardIndex, card in enumerate(player.cards):
                print(f"{cardIndex+1}: {card}")

            # Play card
            while not confirmed:
                print('Pick a card to play (1-5)')
                cardPlayedIndex = input()
                clearInput()

                # Ensure valid input
                while (not cardPlayedIndex.isnumeric() or (int(cardPlayedIndex) < 1) or (int(cardPlayedIndex) > 5)):
                    print("Invalid selection, try again")
                    cardPlayedIndex = input()
                    clearInput()
                playedCard = player.cards[int(cardPlayedIndex)-1]

                # Confirm card played
                print(f"Confirm chosen card: {playedCard} (y/n)")
                confirmation = input()
                clearInput()
                if confirmation == 'y':
                    confirmed = True
                    print(f"\n{player.name} played {playedCard}")

                    # Calculate card value
                    cardValue = cardMap[playedCard]
                    if self.trumpSuit in playedCard:
                        cardValue += 9
                        if 'J' in playedCard:
                            cardValue += 5
                    elif suitMap[self.trumpSuit] in playedCard and 'J' in playedCard:
                        cardValue += 13

                    # Add card to played cards
                    self.playedCards.append((player.name, playedCard, cardValue))
                print()

        # Print played cards
        print("Played cards: ")
        for cardTuple in self.playedCards:
            print(f"{cardTuple[0]} played {cardTuple[1]}")
        
        # Determine winner of round
        maxValue = 0
        for cardTuple in self.playedCards:
            # print(f"{cardTuple[1]} is worth {cardTuple[2]}")
            if cardTuple[2] > maxValue:
                maxValue = cardTuple[2]
                self.winner = cardTuple
            
        print(f"\n{self.winner[0]} wins the round with a {self.winner[1]}\n")

    def deal(self):
    
        print()
        # Deal cards and turn over trump suit card
        print(f"{self.dealer.name} is dealing,", end='')
        for player in self.players:
            for i in range(5):
                cardDealt = random.choice(self.deck)
                player.cards.append(cardDealt)
                self.deck.remove(cardDealt)
        suitCard = random.choice(self.deck)
        print(f" he turns over: {suitCard} \n")

        # Loop through players to determine trump suit
        for i in range(1, 5):
            playerIndex = (self.dealerIndex + i) % len(self.players)
            print(f"{self.players[playerIndex].name}, do you want {self.dealer.name} to pick up {suitCard}? \t (y/n)")
            print(f"Your cards are: ")
            for card in self.players[playerIndex].cards:
                print(card)
            confirmation = input()
            clearInput()
            print()
            if confirmation == 'y':
                break

        # Trump suit is determined and dealer picks card to switch out
        for i, char in enumerate(suitCard):
            print(f"{i}: {char}")
        self.trumpSuit = suitCard[-1]
        print(f"\nThe trump suit is {self.trumpSuit} \n")
        print(f"{self.dealer.name}, select a card to replace with the {suitCard}")
        for i, card in enumerate(self.dealer.cards):
            print(f"{i+1}: {card}")
        discardCardIndex = input()
        clearInput()
        print()

        while (not discardCardIndex.isnumeric() or int(discardCardIndex) < 1 or int(discardCardIndex) > 5): # Ensure valid input
            print("Invalid selection, try again")
            discardCardIndex = input()
        self.dealer.cards[int(discardCardIndex)-1] = suitCard
        print(f"{self.dealer.name} picked up the {suitCard} \nRound now starting...\n")

        # Update dealer
        self.dealerIndex = (self.dealerIndex + 1) % len(self.players)
        self.dealer = self.players[self.dealerIndex]

    def shuffle(self):
        self.deck = deck.copy()
        for player in self.players:
            player.cards.clear()
            
        print(f"The winner is: {self.winner}")