// import { strict } from "assert";
import { Card } from "./Card";

export class Deck {
  private static SIZE = 32;
  public readonly cards: Card[] = [];

  cons;
  constructor() {
    const swap = (data: Array<number>, i1: number, i2: number) => {
      // console.log(`swap ${i1} <-> ${i2}`);

      const buf = data[i1];
      data[i1] = data[i2];
      data[i2] = buf;
    };

    const rawDeck: number[] = new Array(Deck.SIZE);

    // init
    for (let index = 0; index < Deck.SIZE; index++) {
      rawDeck[index] = index;
    }

    // shuffle Deck.SIZE times
    for (let index = 0; index < Deck.SIZE; index++) {
      swap(rawDeck, index, Math.floor(Math.random() * Deck.SIZE));
    }

    // console.log(`${rawDeck.join(",")}`);

    this.cards = rawDeck.map(v => new Card(v));
  }

  print() {
    return this.cards.map(card => card.toString()).join(", ");
    // console.log(`Deck: ${deck}`);
  }
}
