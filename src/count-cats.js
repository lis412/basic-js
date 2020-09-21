const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((res, item) => res + item.reduce((cnt, place) => cnt + (place === "^^"), 0), 0);
};
