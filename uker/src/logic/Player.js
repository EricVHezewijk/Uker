
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
}