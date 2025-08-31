class Deck {
    private deck: Card[];

    public constructor(){
        this.deck = this.generateDeck();
    }

    public getCard() : Card {
        return this.deck.pop()!;
    }

    public generateDeck() : Card[] {
        const deck : Card[] = [];
        const suits: string[] = ["♠","♣","♦","♥"];
        const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (const suit of suits) {
            for (const number of numbers){
                const kaart = new Card(suit, number);
                deck.push(kaart)
            }
        } 

        return this.fisherYatesShuffleAlgorithm(deck);
    }

    public fisherYatesShuffleAlgorithm(deck: Card[]): Card[] {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}


}


class Card {
    private suit: string;
    private value: number;

    public constructor(suits: string, value:number){
        this.suit = suits;
        this.value = value;
    }

    public cardToString() : string {
        return `${this.suit} ${this.getRoyalty(this.value)}`;
    }

    private getRoyalty(value: number): string {
        if(value === 11){
            return "J";
        } else if (value === 12){
            return "Q";
        } else if (value === 13){
            return "K";
        } else if (value === 1){
            return "A";
        } 
        return `${value}`;
    }
}

export default Deck;