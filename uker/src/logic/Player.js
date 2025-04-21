
export default class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    setHand(hand) {
        this.hand = hand;
    }

    getName() {
        return this.name;
    }

    swapCard(cardIndex, newCard) {
        if (cardIndex >= 0 && cardIndex < this.hand.length) {
            this.hand[cardIndex] = newCard;
        } else {
            console.error("Invalid card index.");
        }
    }
}