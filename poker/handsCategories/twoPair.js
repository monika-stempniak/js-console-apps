const { threeOfAKind } = require("./threeOfAKind");
const { sortAndCheckEqualityOfCards } = require("../utils/sortAndCheckEqualityOfCards");

// Dwie pary / Two pair
const twoPair = cards => {
  if (threeOfAKind(cards)) {
    return false;
  }

  const checkCards = sortAndCheckEqualityOfCards(cards);

  if (checkCards.length === 2) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  twoPair
}
