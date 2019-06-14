const { sortAndCheckEqualityOfCards } = require("../utils/sortAndCheckEqualityOfCards");
const { sortAndCheckCardsOrder } = require("../utils/sortAndCheckCardsOrder");

// Wysoka karta / High card
const highCard = cards => {
  const checkCards = sortAndCheckEqualityOfCards(cards);
  const checkCardsOrder = sortAndCheckCardsOrder(cards);

  if (!checkCardsOrder && checkCards.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  highCard
}
