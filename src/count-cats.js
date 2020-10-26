const CustomError = require("../extensions/custom-error");
let countCats;
module.exports = function countCats(/* matrix */array) {
 // throw new CustomError('Not implemented');
 let a = array.flat(Infinity);
 let b = a.filter(i => i === '^^').length;
 return b;
};
