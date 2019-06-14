const { board } = require('./board');

class BouncySimulator {
  constructor(board) {
    this.board = board;
    this.coords = "";
    this.x = null;
    this.y = null;
    this.border = [];
    this.road = [];
  }

  createCoords(x, y) {
    return `${x}${y}`;
  }

  getObjectCoordinates() {
    const boardSize = this.board.length;
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (this.board[i][j] === "1") {
          this.x = i;
          this.y = j;
          this.coords = this.createCoords(i, j);
        }
      }
    }
  }

  getBorderCoordinates() {
    const boardSize = this.board.length;
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (this.board[i][j] === "X") {
          const coords = this.createCoords(i, j);
          this.border.push(coords);
        }
      }
    }
  }

  checkNextCoords(lastCoords, x, y) {
    const currentCoords = this.createCoords(x, y);

    const leftUpCoords = this.createCoords(x - 1, y - 1);
    const rightUpCoords = this.createCoords(x - 1, y + 1);
    const leftDownCoords = this.createCoords(x + 1, y - 1);
    const rightDownCoords = this.createCoords(x + 1, y + 1);

    const nextDirections = [
      {
        coords: leftUpCoords,
        vector: [-1, -1]
      },
      {
        coords: rightUpCoords,
        vector: [-1, 1]
      },
      {
        coords: leftDownCoords,
        vector: [1, -1]
      },
      {
        coords: rightDownCoords,
        vector: [1, 1]
      }
    ];

    const border = this.border.filter(coords => nextDirections.some(item => item.coords === coords));

    const nextCoords = border.length === 3 && lastCoords !== currentCoords
    ? nextDirections.filter(({ coords }) => coords === lastCoords)
    : nextDirections
        .filter(({ coords }) => !border.includes(coords))
        .filter(({ coords }) => coords !== lastCoords);
   
    const coords = nextCoords[0].coords;
    const vector = nextCoords[0].vector;

    return {
      x: +coords[0],
      y: +coords[1],
      vector,
    }
  }

  moveObject() {
    const firstStepCoords = this.checkNextCoords(this.coords, this.x, this.y);
    let vector = firstStepCoords.vector;
    let x = this.x + vector[0];
    let y = this.y + vector[1];
    let road = [this.createCoords(this.x, this.y)];

    while (this.coords !== this.createCoords(x, y) && this.board[x][y] !== "X") {
      road.push(this.createCoords(x, y));
      const vx = vector[0];
      const vy = vector[1];
      x += vx;
      y += vy;

      if (this.board[x][y] === "X") {
        x -= vx;
        y -= vy;

        const lastStepCoords = this.createCoords(x - vx, y - vy);
        const nextStepCoords = this.checkNextCoords(lastStepCoords, x, y);

        x = nextStepCoords.x;
        y = nextStepCoords.y;
        vector = nextStepCoords.vector;
      }

      if (this.coords === this.createCoords(x, y)) {
        road.push(this.createCoords(x, y));
      }
    }
    this.road = road;
  }

  run() {
    this.getObjectCoordinates();
    this.getBorderCoordinates();
    this.moveObject();

    return {
      path: this.road
    }
  }
}

const bouncySimulator = new BouncySimulator(board);
const objectPath = bouncySimulator.run();
console.log(objectPath);
