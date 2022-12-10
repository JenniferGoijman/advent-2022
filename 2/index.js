const { readFile } = require("../utils/readFile");

const data = readFile("input.txt");

// part 1
const winningPoints = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
};

const shapePoints = {
  X: 1,
  Y: 2,
  Z: 3,
};

// part 2
const winningPoints2 = {
  X: 0,
  Y: 3,
  Z: 6,
};

const shapePoints2 = {
  A: {
    // piedra
    X: 3, // tijera
    Y: 1, // piedra
    Z: 2, // papel
  },
  B: {
    // papel
    X: 1, // piedra
    Y: 2, // papel
    Z: 3, // tijera
  },
  C: {
    // tijera
    X: 2, // papel
    Y: 3, // tijera
    Z: 1, // piedra
  },
};

const totalPoints = data.reduce((acc, item) => {
  // const points = winningPoints[item[0]][item[2]] + shapePoints[item[2]]; // part 1
  const points = winningPoints2[item[2]] + shapePoints2[item[0]][item[2]]; // part 2
  acc = acc + points;
  return acc;
}, 0);

console.log(totalPoints);
