const sortAndCheckCardsOrder = cards => {
  const copyCards = [...cards];
  const sortedCards = copyCards.sort(function(a, b){return a.order - b.order});

  let checkSortedCardsOrder = [];
  for (let i = 0; i < sortedCards.length; i++) {
    if (i === cards.length - 1) {
      break;
    } else if (sortedCards[i].order === sortedCards[i + 1].order - 1) {
      checkSortedCardsOrder.push(true);
    } else {
      checkSortedCardsOrder.push(false);
    }
  }

  return checkSortedCardsOrder.every(value => value === true);
}

module.exports = {
  sortAndCheckCardsOrder
}
