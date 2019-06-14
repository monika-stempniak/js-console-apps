class HunterGame {
  constructor(coordinates, board) {
    this.coords = coordinates;
    this.board = board;
  }

  run() {
    let x = null;
    let y = null;
    let value = null;
    let coords = this.coords;

    while (value !== coords) {
      if (value) {
        coords = (value).toString();
      } else {
        coords = (coords).toString();
      }
      x = +coords[0];
      y = +coords[1];
      value = this.board[x - 1][y - 1];
      coords = Number(coords);
      console.log("Coordinates:", coords, "| Cell value:", value);

      if (value === coords) {
        console.log("The treasure found!");
      }
    }
  }
}

const board = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23]
];

const hunterGame = new HunterGame(11, board);
hunterGame.run();
