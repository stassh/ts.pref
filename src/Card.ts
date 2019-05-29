import { strict as assert } from "assert";

export class Card {
  // private name: "♠♣♥♦"
  // Suit
  // Hearts, Diamonds, Clubs, Spades
  // Ace, King, Queen, Jack

  private readonly suit: Suit;
  private readonly value: CardValue;
  private readonly id: number;

  constructor(id: number) {
    assert(id >= 0 && id <= 32, `Only 32 cards in the deck. Actual value: ${id}`);

    this.id = id;
    this.suit = ["♠", "♣", "♥", "♦"][Math.floor(id / 8)];
    this.value = ["7", "8", "9", "10", "J", "Q", "K", "A"][id % 8];
  }

  toString() {
    return `${this.value}${this.suit}`;
  }

  getId() {
    return this.id;
  }
}

export type Suit = string;
export type CardValue = string;
