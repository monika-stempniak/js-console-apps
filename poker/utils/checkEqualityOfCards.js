const checkEqualityOfCards = cards => {
  const firstCard = cards[0].card;
  return cards.every(card => card.card === firstCard);
}

module.exports = {
  checkEqualityOfCards
}
