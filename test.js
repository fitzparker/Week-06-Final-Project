const expect = chai.expect;
const assert = chai.assert;

const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

describe("Deck of Cards", () => {
  it("#should return an array with 52 objects", () => {
    //creating deck of cards
    const deck = [];
    for (let suitName of suits) {
      for (let cardValue of values) {
        deck.push({
          value: values.indexOf(cardValue),
          suit: suitName,
          name: cardValue,
        });
      }
    }
    expect(deck.length).to.equal(52);
  });
});
