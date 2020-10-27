const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let a = array.flat(Infinity);
  let b = a.filter(i => i === '^^').length;
  return b;
};
