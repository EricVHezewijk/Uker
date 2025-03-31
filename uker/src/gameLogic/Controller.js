import Card from './Card.js';
import Player from './Player.js';

const SixOfClubs = new Card(6, 'Clubs', '../../public/cardImages/6_of_clubs.png');
const SevenOfClubs = new Card(7, 'Clubs', '../../public/cardImages/7_of_clubs.png');
const EightOfClubs = new Card(8, 'Clubs', '../../public/cardImages/8_of_clubs.png');
const NineOfClubs = new Card(9, 'Clubs', '../../public/cardImages/9_of_clubs.png');
const TenOfClubs = new Card(10, 'Clubs', '../../public/cardImages/10_of_clubs.png');
const JackOfClubs = new Card(11, 'Clubs', '../../public/cardImages/jack_of_clubs.png');
const QueenOfClubs = new Card(12, 'Clubs', '../../public/cardImages/queen_of_clubs.png');
const KingOfClubs = new Card(13, 'Clubs', '../../public/cardImages/king_of_clubs.png');
const AceOfClubs = new Card(14, 'Clubs', '../../public/cardImages/ace_of_clubs.png');

const SixOfSpades = new Card(6, 'Spades', '../../public/cardImages/6_of_spades.png');
const SevenOfSpades = new Card(7, 'Spades', '../../public/cardImages/7_of_spades.png');
const EightOfSpades = new Card(8, 'Spades', '../../public/cardImages/8_of_spades.png');
const NineOfSpades = new Card(9, 'Spades', '../../public/cardImages/9_of_spades.png');
const TenOfSpades = new Card(10, 'Spades', '../../public/cardImages/10_of_spades.png');
const JackOfSpades = new Card(11, 'Spades', '../../public/cardImages/jack_of_spades.png');
const QueenOfSpades = new Card(12, 'Spades', '../../public/cardImages/queen_of_spades.png');
const KingOfSpades = new Card(13, 'Spades', '../../public/cardImages/king_of_spades.png');
const AceOfSpades = new Card(14, 'Spades', '../../public/cardImages/ace_of_spades.png');

const SixOfHearts = new Card(6, 'Hearts', '../../public/cardImages/6_of_hearts.png');
const SevenOfHearts = new Card(7, 'Hearts', '../../public/cardImages/7_of_hearts.png');
const EightOfHearts = new Card(8, 'Hearts', '../../public/cardImages/8_of_hearts.png');
const NineOfHearts = new Card(9, 'Hearts', '../../public/cardImages/9_of_hearts.png');
const TenOfHearts = new Card(10, 'Hearts', '../../public/cardImages/10_of_hearts.png');
const JackOfHearts = new Card(11, 'Hearts', '../../public/cardImages/jack_of_hearts.png');
const QueenOfHearts = new Card(12, 'Hearts', '../../public/cardImages/queen_of_hearts.png');
const KingOfHearts = new Card(13, 'Hearts', '../../public/cardImages/king_of_hearts.png');
const AceOfHearts = new Card(14, 'Hearts', '../../public/cardImages/ace_of_hearts.png');

const SixOfDiamonds = new Card(6, 'Diamonds', '../../public/cardImages/6_of_diamonds.png');
const SevenOfDiamonds = new Card(7, 'Diamonds', '../../public/cardImages/7_of_diamonds.png');
const EightOfDiamonds = new Card(8, 'Diamonds', '../../public/cardImages/8_of_diamonds.png');
const NineOfDiamonds = new Card(9, 'Diamonds', '../../public/cardImages/9_of_diamonds.png');
const TenOfDiamonds = new Card(10, 'Diamonds', '../../public/cardImages/10_of_diamonds.png');
const JackOfDiamonds = new Card(11, 'Diamonds', '../../public/cardImages/jack_of_diamonds.png');
const QueenOfDiamonds = new Card(12, 'Diamonds', '../../public/cardImages/queen_of_diamonds.png');
const KingOfDiamonds = new Card(13, 'Diamonds', '../../public/cardImages/king_of_diamonds.png');
const AceOfDiamonds = new Card(14, 'Diamonds', '../../public/cardImages/ace_of_diamonds.png');

const deck = [
    SixOfClubs, SevenOfClubs, EightOfClubs, NineOfClubs, TenOfClubs, JackOfClubs, QueenOfClubs, KingOfClubs, AceOfClubs,
    SixOfSpades, SevenOfSpades, EightOfSpades, NineOfSpades, TenOfSpades, JackOfSpades, QueenOfSpades, KingOfSpades, AceOfSpades,
    SixOfHearts, SevenOfHearts, EightOfHearts, NineOfHearts, TenOfHearts, JackOfHearts, QueenOfHearts, KingOfHearts, AceOfHearts,
    SixOfDiamonds, SevenOfDiamonds, EightOfDiamonds, NineOfDiamonds, TenOfDiamonds, JackOfDiamonds, QueenOfDiamonds, KingOfDiamonds, AceOfDiamonds
];

export default class Controller {
    constructor(players=[]) {
        this.deck = deck
        this.players = players
    }

    startGame() {

        this.players.push(new Player('Eric'));

        // Deal cards
        for (let i=0; i<this.players.length; i++) {
            for (let j=0; j<5; j++) {
                let randomIndex = Math.floor(Math.random() * this.deck.length);
                this.players[i].hand.push(this.deck[randomIndex]);
                this.deck.splice(randomIndex, 1);
            }
        }

        for (let i=0; i<5; i++) {
            console.log(this.players[0].hand[i]);
        }
    }
}



