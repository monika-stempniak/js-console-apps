const { sortAndCheckCardsOrder } = require("../utils/sortAndCheckCardsOrder");

// Kolor / Flush
const flush = cards => {
  const firstColour = cards[0].colour;
  const checkColours = cards.every(card => card.colour === firstColour);

  if (!checkColours) {
    return false;
  }

  const checkCardsOrder = sortAndCheckCardsOrder(cards);

  return !!(checkColours & !checkCardsOrder);
}

module.exports = {
  flush 
}
