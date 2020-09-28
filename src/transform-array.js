const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  return arr.reduce((res, value, index, arr) => {
    switch (value) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        // do nothing
        break;    
      default:
        let cnt = 1;
        if (arr[index - 1] === '--discard-next') break; //если предыдущая каманда "удалить", то больше ничего делать не надо
        if (arr[index - 1] === '--double-next') cnt++;
        if (arr[index + 1] === '--discard-prev') cnt--;
        if (arr[index + 1] === '--double-prev') cnt++;
        while (cnt-- > 0) res.push(value);
    }
    return res;
  }, []);
};
