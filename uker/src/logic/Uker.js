import Player from './Player.js';

export default class Uker {
    constructor() {
        this.deck = this.createDeck();
        this.players = [];
        this.dealerIndex = 0;
        this.trumpCard = null;
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
            // Should add implementation to display a nice UI rendered message to the user
        
        }
    }

    createDeck() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['9', '10', 'jack', 'queen', 'king', 'ace'];
        const deck = [];

        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({
                    suit, 
                    rank,
                    img: `/cardImages/${rank}_of_${suit}.png`
                });
            }
        }
        console.log("Deck has been created.");
        console.log(this.deck);
        return deck;
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        console.log("Deck has been shuffled.");
    }

    dealToPlayers() {
        for (const player of this.players) {
            const hand = [];
            for (let i = 0; i < 5; i++) {
                if (this.deck.length > 0) {
                    hand.push(this.deck.pop());
                }
            }
            player.setHand(hand);
        }

        this.trumpCard = this.deck.pop(); // Set the trump suit to the last card in the deck
        console.log(`Trump suit is ${this.trumpCard.suit}.`);
    }

    printHand(player) {
        console.log(`${player.name}'s hand:`);
        player.hand.forEach(card => {
            console.log(`${player} of ${card.suit}`);
        });
    }
}
