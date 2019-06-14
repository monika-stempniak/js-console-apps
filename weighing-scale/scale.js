const { balls } = require("./balls");

const getRandomNumber = array => {
  return Math.floor(Math.random() * array.length);
};

// randomly increases the weight of one ball
const addWeight = () => {
  balls[getRandomNumber(balls)].weight++;
};

const ballsLeft = [...balls];

// takes randomly x balls
const takeBalls = times => {
  const ballsToWeigh = [];
  for (let i = 0; i < times; i++) {
    const random = getRandomNumber(ballsLeft);
    const ball = ballsLeft[random];
    ballsToWeigh.push(ball);
    ballsLeft.splice(random, 1);
  }
  return ballsToWeigh;
}; 

// max 2 usage
let numberOfWeighings = 0;

const getWeight = balls => {
  return balls.reduce((total, currValue) => {
    return total + currValue.weight;
  }, 0);
};

const compare3balls = balls => {
  const ballsLeft = [...balls];
  const ballsToWeigh1 = ballsLeft[0];
  const ballsToWeigh2 = ballsLeft[1];
  const weight1 = ballsToWeigh1.weight;
  const weight2 = ballsToWeigh2.weight;

  numberOfWeighings++;

  if (weight1 > weight2) {
    return ballsToWeigh1;
  } else if (weight1 < weight2) {
    return ballsToWeigh2;
  } else {
    return ballsLeft[2];
  }
};

// accepts 2 arrays and returns which is heavier
const weigh = (balls1, balls2) => {
  const weight1 = getWeight(balls1);
  const weight2 = getWeight(balls2);

  numberOfWeighings++;

  if (weight1 === weight2) {
    const ballsToWeigh1 = ballsLeft[0];
    const ballsToWeigh2 = ballsLeft[1];
    const weight1 = ballsToWeigh1.weight;
    const weight2 = ballsToWeigh2.weight;

    numberOfWeighings++;

    if (weight1 > weight2) {
      return ballsToWeigh1;
    } else if (weight1 < weight2) {
      return ballsToWeigh2;
    } else {
      return "Each ball weighs the same";
    }

  } else if (weight1 > weight2) {
    return compare3balls(balls1);
  } else if (weight1 < weight2) {
    return compare3balls(balls2);
  }
};

addWeight();

console.log("all balls:");
console.log(balls);
console.log("*****************");

const ballsToWeigh1 = takeBalls(3);
const ballsToWeigh2 = takeBalls(3);
console.log("1st set of balls to weigh:");
console.log(ballsToWeigh1);
console.log("2nd set of balls to weigh:");
console.log(ballsToWeigh2);
console.log("balls left");
console.log(ballsLeft);

console.log("*****************");
console.log("result of weighing:");
console.log(weigh(ballsToWeigh1, ballsToWeigh2));
console.log("numberOfWeighings: ", numberOfWeighings);
