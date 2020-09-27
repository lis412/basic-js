const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr)
      ? arr
          .map((item) => (Array.isArray(item) ? this.calculateDepth(item) : 0))
          .reduce((depth, item) => Math.max(depth, item), 0) + 1
      : 0;
  }
};
