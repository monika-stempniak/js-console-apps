const cards = require("./cards.json");
const colours = require("./cards_colours.json");
const { royalFlush } = require("./handsCategories/royalFlush");
const { straightFlush } = require("./handsCategories/straightFlush");
const { quads } = require("./handsCategories/fourOfAKind");
const { flush } = require("./handsCategories/flush");
const { full } = require("./handsCategories/full");
const { straight } = require("./handsCategories/straight");
const { threeOfAKind } = require("./handsCategories/threeOfAKind");
const { twoPair } = require("./handsCategories/twoPair");
const { onePair } = require("./handsCategories/onePair");
const { highCard } = require("./handsCategories/highCard");

const createDeckOfCards = (cards, colours) => {
  const cardsArray = cards.map(card => {
    return colours.map(colour => {
      return {
        card: card.card, 
        order: card.order, 
        colour: colour.colour
      }
    });
  });

  const deckOfCards = cardsArray.reduce((acc, val) => acc.concat(val), []);

  return deckOfCards;
}

const getRandomCard = cards => {
  return Math.floor(Math.random() * cards.length);
}

const dealCards = cards => {
  const maxNumberOfCards = 5;
  const dealtCards = [];

  for (let i = 0; i < cards.length; i++) {
    if (dealtCards.length >= maxNumberOfCards) {
      return dealtCards;
    }
    const card = cards[getRandomCard(cards)];
    if (dealtCards.indexOf(card) === -1) {
      dealtCards.push(card);
    }
  }

  return dealtCards;
}

const checkCards = cards => {

  return {
    royalFlush: royalFlush(cards),
    straightFlush: straightFlush(cards),
    fourOfAKind: quads(cards),
    flush: flush(cards),
    full: full(cards),
    straight: straight(cards),
    threeOfAKind: threeOfAKind(cards),
    twoPair: twoPair(cards),
    onePair: onePair(cards),
    highCard: highCard(cards),
  }
}

const deckOfCards = createDeckOfCards(cards, colours);

const dealtCards = dealCards(deckOfCards);
console.log("dealt cards:");
const sortDealtCards = dealtCards.sort(function(a, b){return a.order - b.order});
console.log(sortDealtCards);

console.log("*************");
console.log("hand:");
const checkHand = checkCards(dealtCards);
console.log(checkHand);
