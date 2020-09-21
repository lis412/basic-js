const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) 
    ? members.filter(value => typeof(value)==="string" && value.trim()).map(name => name.trim()[0].toUpperCase()).sort().join('')
    : false;
};
