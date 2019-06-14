const { full } = require("./full");
const { quads } = require("./fourOfAKind");
const { checkEqualityOfCards } = require("../utils/checkEqualityOfCards");

// Trójka / Three of a kind
const threeOfAKind = cards => {
  const copyCards = [...cards];
  const sortedCards = copyCards.sort(function(a, b){return a.order - b.order});

  if (full(cards) || quads(cards)) {
    return false;
  }

  const firstThreeCards = sortedCards.slice(0, 3);
  const lastTwoCards = sortedCards.slice(3, 5);
  const firstChecking = checkEqualityOfCards(firstThreeCards) && !checkEqualityOfCards(lastTwoCards);

  if (firstChecking) {
    return firstChecking;
  }

  const firstTwoCards = sortedCards.slice(0, 2);
  const lastThreeCards = sortedCards.slice(2, 5);
  const secondChecking = !checkEqualityOfCards(firstTwoCards) && checkEqualityOfCards(lastThreeCards);

  if (secondChecking) {
    return secondChecking;
  }

  const middleThreeCards = sortedCards.slice(1, 4);
  const firstCard = sortedCards.shift().card;
  const lastCard = sortedCards.pop().card;
  const thirdChecking = checkEqualityOfCards(middleThreeCards) && !middleThreeCards.includes(firstCard) && !middleThreeCards.includes(lastCard);

  if (thirdChecking) {
    return thirdChecking;
  }

  return false;
}

module.exports = {
  threeOfAKind
}
