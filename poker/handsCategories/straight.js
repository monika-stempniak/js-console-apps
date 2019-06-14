// Strit / Straight
const straight = cards => {
  const copyCards = [...cards];
  const sortedCards = copyCards.sort(function(a, b){return a.order - b.order});
  
  const firstColour = cards[0].colour;
  const checkColours = cards.every(card => card.colour === firstColour);

  if (checkColours) {
    return false;
  };
  
  let checkCardsOrder;

  const theLowestStraight = [1, 2, 3, 4, 13];
  const checkTheLowestStraight = copyCards.map((card,i) => {
    return card.order === theLowestStraight[i];
  });

  checkCardsOrder = checkTheLowestStraight.every(value => value === true);

  if (!!(checkCardsOrder & !checkColours)) {
    return true;
  };

  const checkSortedCardsOrder = [];
  for (let i = 0; i < sortedCards.length; i++) {
    if (i === cards.length - 1) {
      break;
    } else if (sortedCards[i].order === sortedCards[i + 1].order - 1) {
      checkSortedCardsOrder.push(true);
    } else {
      checkSortedCardsOrder.push(false);
    }
  }

  checkCardsOrder = checkSortedCardsOrder.every(value => value === true);

  return !!(checkCardsOrder & !checkColours);
}

module.exports = {
  straight
}
