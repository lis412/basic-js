const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

function isValid(value) {
  if (typeof(sampleActivity) !== 'string') return false;
  if (isNaN(sampleActivity)) return false;
  if (+sampleActivity > MODERN_ACTIVITY) return false;

  return true;
}

module.exports = function dateSample(sampleActivity) {
  return isValid(sampleActivity) 
    ? Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / Math.LN2)
    : false;
};
