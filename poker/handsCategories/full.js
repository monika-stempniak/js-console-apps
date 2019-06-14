const { checkEqualityOfCards } = require("../utils/checkEqualityOfCards");

// Ful / Full house
const full = cards => {
  const copyCards = [...cards];
  const sortedCards = copyCards.sort(function(a, b){return a.order - b.order});

  const firstThreeCards = sortedCards.slice(0, 3);
  const lastTwoCards = sortedCards.slice(3, 5);
  const firstChecking = checkEqualityOfCards(firstThreeCards) & checkEqualityOfCards(lastTwoCards);

  if (firstChecking) {
    return true;
  }

  const firstTwoCards = sortedCards.slice(0, 2);
  const lastThreeCards = sortedCards.slice(2, 5);
  const secondChecking = checkEqualityOfCards(firstTwoCards) & checkEqualityOfCards(lastThreeCards);

  return !!(firstChecking || secondChecking);
}

module.exports = {
  full
}
