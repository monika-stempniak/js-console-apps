const { sortAndCheckEqualityOfCards } = require("../utils/sortAndCheckEqualityOfCards");

// Para / One pair
const onePair = cards => {
  const checkCards = sortAndCheckEqualityOfCards(cards);

  if (checkCards.length === 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  onePair
}
