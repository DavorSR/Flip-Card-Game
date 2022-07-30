const SUITS = ["♠", "♥", "♦", "♣"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {

    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        // Even if we call it pop we will use shift() method because it removes the first element from an array and returns that removed element while pop() removes the last element.

        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card);
    }

    // Randomising deck of cards
    shuffle() {
        // this.cards.sort((a,b) => Math.random() - .5)
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))

            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

}

class Card {

    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    get color() {
        return this.suit === '♣' || this.suit === "♠" ? 'black' : 'red'
    }

    // creating a div element to fill HTML  automatically 
    getHTML() {
        const cardDiv = document.createElement('div');
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }

}


function newDeck() {
    // We use flatMap to create one Array with data instead of Array of Arrays
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })

    })
}