const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let transf = [];
  
  if (!Array.isArray(arr)) {throw new Error()};
  if (arr.length === 0) {return arr};
  if (arr.indexOf(undefined)) {return arr};
  
  for (let i = 0; i < arr.length; i++) {  
    
    if (arr.includes ('--double-prev')) {
      if (arr[i - 1] !== undefined){
        x = arr.indexOf('--double-prev');
        first = arr.slice (0, x);
        second = arr.slice (x + 1);
        first.push(arr[i - 1]);
        transf = first.concat(second);
        return transf;
      };
    };
  };
    

  for (let i = 0; i < arr.length; i++) {  

    if (arr.includes('--discard-prev')) {
      x = arr.indexOf ('--discard-prev');
      first = arr.slice (0, x);
      second = arr.slice (x + 1);
      dobavka = first.pop (x);
      transf = first.concat(second);
      return transf;
    };
  };

  if (arr.includes('--discard-next')) {
      x = arr.indexOf ('--discard-next');
      first = arr.slice (0, x);
      second = arr.slice (x + 1);
      dobavka = second.shift (x);
      transf = first.concat(second);
      return transf;
    };

    if (arr.includes('--double-next')) {
      x = arr.indexOf ('--double-next');
      first = arr.slice (0, x);
      second = arr.slice (x + 1);
      dobavka = second.unshift (x + 1);
      transf = first.concat(second);
      return transf;
    };
  };

