const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let str = '';
  let abbr = '';
  
  if (!Array.isArray(members)) return false;
  
  for (let i = 0; i <= members.length; i++) {
    if (typeof(members[i]) === 'string') {
      str = members[i].replace(/ /g, '').toUpperCase();
      abbr += str[0]
    }
  }
  return abbr.split('').sort().join('');
};