// Poker królewski / Royal flush
const royalFlush = cards => {
  const checkCards = cards.every(card => card.order >= 9);

  if (!checkCards) {
    return false;
  }
  
  const firstColour = cards[0].colour;
  const checkColours = cards.every(card => card.colour === firstColour);

  return !!(checkCards & checkColours);
}

module.exports = {
  royalFlush 
}
