/// <reference types="jest" />

import { Card } from "./Card";

describe("Card tests", () => {

  it("Test", async () => {
    const value = new Card(10);
    expect(value.toString()).toEqual("9♣");
    expect(value.getId()).toEqual(10);
  });
});