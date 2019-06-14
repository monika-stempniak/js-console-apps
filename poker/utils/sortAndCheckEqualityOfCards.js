const sortAndCheckEqualityOfCards = cards => {
  const copyCards = [...cards];
  const sortedCards = copyCards.sort(function(a, b){return a.order - b.order});

  const checkCards = [];

  for (let i = 0; i < sortedCards.length; i++) {
    if (i + 1 === sortedCards.length) {
      break;
    } else if (sortedCards[i].card === sortedCards[i + 1].card) {
      checkCards.push(true);
    }
  }

  return checkCards;
}

module.exports = {
  sortAndCheckEqualityOfCards 
}
