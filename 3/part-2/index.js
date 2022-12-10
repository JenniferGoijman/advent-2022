const { readFile } = require("../../utils/readFile");

const data = readFile("../input.txt");

const priorities = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const splitDataBy3 = (data) => {
  const dataSplitBy3 = [];

  data.reduce((acc, item, idx) => {
    acc.push(item);

    if ((idx + 1) % 3 == 0) {
      dataSplitBy3.push(acc);
      return [];
    }

    return acc;
  }, []);

  return dataSplitBy3;
};

const dataBy3 = splitDataBy3(data);

const prioritiesValue = dataBy3.reduce((acc, rucksack) => {
  const firstRucksack = [...rucksack[0]];
  const secondRucksack = rucksack[1];
  const thirdRucksack = rucksack[2];

  const duplicatedItems1and2 = [];

  firstRucksack.map((item) => {
    if (secondRucksack.includes(item) && !duplicatedItems1and2.includes(item)) {
      duplicatedItems1and2.push(item);
    }
  });

  const duplicatedItems = duplicatedItems1and2.filter((item) =>
    thirdRucksack.includes(item)
  );

  acc += priorities[duplicatedItems[0]];
  return acc;
}, 0);

console.log(prioritiesValue); // 2973
