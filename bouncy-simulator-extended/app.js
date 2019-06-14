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
    return `${x}-${y}`;
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

  checkNextDirections(lastCoords, x, y) {
    const leftUpCoords = this.createCoords(x - 1, y - 1);
    const rightUpCoords = this.createCoords(x - 1, y + 1);
    const leftDownCoords = this.createCoords(x + 1, y - 1);
    const rightDownCoords = this.createCoords(x + 1, y + 1);

    return [
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

  }

  checkNextCoords(lastCoords, x, y) {
    const currentCoords = this.createCoords(x, y);
    const nextDirections = this.checkNextDirections(lastCoords, x, y);
    const border = this.border.filter(coords => nextDirections.some(item => item.coords === coords));

    let nextCoords = [];
    if (border.length === 3 && lastCoords !== currentCoords) {
      nextCoords = nextDirections.filter(({ coords }) => coords === lastCoords);
    } else if (border.length === 1 && lastCoords !== currentCoords) {
      const splittedLastCoords = lastCoords.split("-");
      nextCoords = nextDirections
        .filter(({ coords }) => !border.includes(coords) && coords !== lastCoords)
        .filter(({ coords }) => {
          const splittedCoords = coords.split("-");
          return splittedCoords[0] !== splittedLastCoords[0] && splittedCoords[1] === splittedLastCoords[1];
      });
    } else if (border.length === 1 && lastCoords === currentCoords) {
      const borderCoords = border[0].split("-");
      nextCoords = nextDirections.filter(({ coords }) => {
          const splittedCoords = coords.split("-");
          return splittedCoords[0] !== borderCoords[0] && splittedCoords[1] !== borderCoords[1];
      });
    } else {
      nextCoords = nextDirections.filter(({ coords }) => !border.includes(coords) && coords !== lastCoords);
    }

    const coords = nextCoords[0].coords.split("-");
    const vector = nextCoords[0].vector;

    return {
      x: +coords[0],
      y: +coords[1],
      vector,
    }
  }

  checkNextRandomCoords(lastCoords, x, y) {
    const currentCoords = this.createCoords(x, y);
    const nextDirections = this.checkNextDirections(lastCoords, x, y);
    const border = this.border.filter(coords => nextDirections.some(item => item.coords === coords));

    const nextCoords = border.length === 3
      ? nextDirections.filter(({ coords }) => coords === lastCoords)
      : nextDirections.filter(({ coords }) => !border.includes(coords) && coords !== lastCoords);

    const index = nextCoords.length > 1 
      ? Math.floor(Math.random() * nextCoords.length)
      : 0;

    const coords = nextCoords[index].coords.split("-");
    const vector = nextCoords[index].vector;

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
    let board = this.board;

    while (this.coords !== this.createCoords(x, y) && board[x][y] !== "X") {
      road.push(this.createCoords(x, y));
      const vx = vector[0];
      const vy = vector[1];

      if (board[x][y] !== "Y") {
        x += vx;
        y += vy;
      } else {
        const lastStepCoords = this.createCoords(x - vx, y - vy);
        const nextStepCoords = this.checkNextRandomCoords(lastStepCoords, x, y);

        board[x][y] = "0";

        x = nextStepCoords.x;
        y = nextStepCoords.y;
        vector = nextStepCoords.vector;

      }

      if (board[x][y] === "X") {
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
    this.board = board;
  }

  run() {
    this.getObjectCoordinates();
    this.getBorderCoordinates();
    this.moveObject();

    return {
      board: this.board,
      path: this.road,
      pathLength: this.road.length,
    }
  }
}

console.log(board);
console.log("**************************");

const bouncySimulator = new BouncySimulator(board);
const objectPath = bouncySimulator.run();
console.log(objectPath);
