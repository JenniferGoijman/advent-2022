const { readFileSync } = require("fs");

const readFile = (file) => {
  return readFileSync(file, "utf8").split(/\r?\n/);
};

module.exports = {
  readFile,
};
