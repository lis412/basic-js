const CustomError = require("../extensions/custom-error");

// str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let res = '';
  let additionStr = '';

  if (String(addition) !== '') {
    additionStr = repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator});
  }

  if (repeatTimes > 0) {
    res = str + additionStr;
    repeatTimes--;
  }

  while (repeatTimes > 0) {
    res += (separator + str + additionStr);
    repeatTimes--;
  }
  return res;
}        