const { readFile } = require("../utils/readFile");

const data = readFile("input.txt");

const array = [];

data.reduce((acc, item) => {
  if (item !== "") {
    acc += +item;
    return acc;
  }

  array.push(acc);
  return 0;
}, 0);

// console.log(Math.max(...array)); // part 1

const sortedArray = array.sort((a, b) => b - a);
console.log(sortedArray[0] + sortedArray[1] + sortedArray[2]); // part 2
