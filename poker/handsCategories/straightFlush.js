const { sortAndCheckCardsOrder } = require("../utils/sortAndCheckCardsOrder");

// Poker / Straight flush
const straightFlush = cards => {
  const checkRoyalFlushCards = cards.every(card => card.order >= 9);

  if (checkRoyalFlushCards) {
    return false;
  }

  const checkCardsOrder = sortAndCheckCardsOrder(cards);

  if (!checkCardsOrder) {
    return false;
  }
  
  const firstColour = cards[0].colour;
  const checkColours = cards.every(card => card.colour === firstColour);

  return !!(!checkRoyalFlushCards & checkCardsOrder & checkColours);
}

module.exports = {
  straightFlush
}
