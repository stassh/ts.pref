import "jest";
import { Deck } from "./Deck";

describe("Deck tests", () => {
  it("Test", async () => {
    const deck = new Deck();
    expect(deck.cards.length).toEqual(32);
    expect(deck.print().length).toEqual(130);
  });
});