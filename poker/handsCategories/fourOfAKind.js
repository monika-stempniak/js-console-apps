const { checkEqualityOfCards } = require("../utils/checkEqualityOfCards");

// Kareta / Four of a kind (Quads)
const quads = cards => {
  const copyCards = [...cards];
  const sortedCards = copyCards.sort(function(a, b){return a.order - b.order});
  const firstCard = sortedCards.shift().card;
  const lastCard = sortedCards.pop().card;

  const checkCards = checkEqualityOfCards(sortedCards);

  if (!checkCards)  {
    return false;
  }

  const firstSortedCard = sortedCards[0].card;
  const compareCards = firstSortedCard === firstCard || firstSortedCard === lastCard;

  return !!(checkCards & compareCards);
}

module.exports = {
  quads
}
