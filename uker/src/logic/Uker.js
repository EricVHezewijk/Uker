import Player from './Player.js';

export default class Uker {
    constructor() {
        this.deck = this.createDeck();
        this.players = [];
        this.dealerIndex = 0;
    }

    addPlayer(player) {
        if (this.players.length < 4) {
            this.players.push(player);
        } else {
            console.log('Maximum number of players reached.');
        }
    }

    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['9', '10', 'J', 'Q', 'K', 'A'];
        const deck = [];

        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({ suit, rank });
            }
        }

        return deck;
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    dealToPlayer(numCards, player) {
        const hand = [];
        for (let i = 0; i < numCards; i++) {
            if (this.deck.length > 0) {
                hand.push(this.deck.pop());
            }
        }
        player.setHand(hand);
    }

    printHand(player) {
        console.log(`${player.name}'s hand:`);
        player.hand.forEach(card => {
            console.log(`${card.rank} of ${card.suit}`);
        });
    }
}

// const player1 = new Player('Player 1');
// const game = new Uker();

// game.shuffleDeck();
// game.dealToPlayer(5, player1);
// game.printHand(player1);
