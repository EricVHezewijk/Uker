import Player from './Player.js';

export default class Uker {
    constructor() {
        this.deck = this.createDeck();
        this.players = [];
        this.dealerIndex = 0;
        this.onPlayersChanged = null; // Callback for when players change
        this.onPlayerLimitExceeded = null; // Callback for when player limit is exceeded
    }

    setPlayersChangedCallback(callback) {
        this.onPlayersChanged = callback;
    }

    addPlayer(name) {
        const newPlayer = new Player(name);
        this.players.push(newPlayer);

        if (this.players.length <= 4) {
            if (this.onPlayersChanged) {
                this.onPlayersChanged([...this.players]);
                console.log(`${name} has joined the game.`);
            }
        } else {
            console.log("Maximum number of players reached. Cannot add more players.");
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
        console.log("Deck has been created.");
        return deck;
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        console.log("Deck has been shuffled.");
    }

    dealToPlayer(numCards, player) {
        const hand = [];
        for (let i = 0; i < numCards; i++) {
            if (this.deck.length > 0) {
                hand.push(this.deck.pop());
            }
        }
        player.setHand(hand);
        console.log(`${player.name} has been dealt ${numCards} cards.`);
    }

    printHand(player) {
        console.log(`${player.name}'s hand:`);
        player.hand.forEach(card => {
            console.log(`${card.rank} of ${card.suit}`);
        });
    }
}
