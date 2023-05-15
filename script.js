class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck() {
    // create deck and give cards a value
    const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

    for (let suitName of suits) {
      for (let cardValue of values) {
        this.deck.push({
          value: values.indexOf(cardValue),
          suit: suitName,
          name: cardValue,
        });
      }
    }
  }

  shuffleDeck() {
    // shuffle deck with math.random and amount of cards
    for (let i = 0; i < this.deck.length; i++) {
      let tempCard = this.deck[i];
      let randomCard = Math.floor(Math.random() * 52);
      this.deck[i] = this.deck[randomCard];
      this.deck[randomCard] = tempCard;
    }
  }

  dealCard() {
    return this.deck.pop();
  }
}

//creating variable and calling functions.
const myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffleDeck();

class Game {
  //creating players and deck of cards.
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.gameDeck = new Deck();
  }

  playGame() {
    //initalize game
    this.gameDeck.createDeck();
    this.gameDeck.shuffleDeck();
    this.dealAllCards();
    let temp1;
    let temp2;

    // assigning winners/ losers or ties to players playing with a for loop.
    for (let i = 0; i < 26; i++) {
      if (this.player1.hand[i].value > this.player2.hand[i].value) {
        console.log(
          `player1 plays ${this.player1.hand[i].name} of ${this.player1.hand[i].suit}`
        );
        console.log(
          `player2 plays ${this.player2.hand[i].name} of ${this.player2.hand[i].suit}`
        );
        console.log("player1 wins round");
        this.player1.addPoints(1);
      }

      if (this.player1.hand[i].value < this.player2.hand[i].value) {
        console.log(
          `player1 plays ${this.player1.hand[i].name} of ${this.player1.hand[i].suit}`
        );
        console.log(
          `player2 plays ${this.player2.hand[i].name} of ${this.player2.hand[i].suit}`
        );
        console.log("player2 wins round");
        this.player2.addPoints(1);
      }
      if (this.player1.hand[i].value === this.player2.hand[i].value) {
        console.log(
          `player1 plays ${this.player1.hand[i].name} of ${this.player1.hand[i].suit}`
        );
        console.log(
          `player2 plays ${this.player2.hand[i].name} of ${this.player2.hand[i].suit}`
        );
        console.log("nobody wins round");
      }
      console.log("-------");
    }

    console.log(`player1 total score ${this.player1.getPoints()}`);
    console.log(`player2 total score ${this.player2.getPoints()}`);
    if (this.player1.getPoints() > this.player2.getPoints()) {
      console.log("player1 wins the game");
    }
    if (this.player2.getPoints() > this.player1.getPoints()) {
      console.log("player2 wins the game");
    }
    if (this.player1.getPoints() === this.player2.getPoints()) {
      console.log("we have a tie game");
    }
  }

  //dealing 26 cards to each player
  dealAllCards() {
    for (let i = 0; i < 52; i++) {
      this.player1.takeCard(this.gameDeck.dealCard());
      this.player2.takeCard(this.gameDeck.dealCard());
    }
  }

  //playHand() {}

  //compare cards of both players
  compareCards() {
    let temp1;
    let temp2;

    temp1 = this.player1.playCard();
    temp2 = this.player2.playCard();
    console.log(temp1.value);
    console.log(temp2.value);
  }
}

//assigning name, points to each hand
class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.hand = [];
  }

  //show player card
  showTopCard() {
    return this.hand[0];
  }

  //take card from deck push to hand
  takeCard(card) {
    this.hand.push(card);
  }

  //plays card from player hand
  playCard() {
    return this.hand.shift();
  }

  //point accumulator
  addPoints(points) {
    this.points += points;
  }

  getPoints() {
    return this.points;
  }
}

//initialize game
const newGame = new Game();
newGame.playGame();
