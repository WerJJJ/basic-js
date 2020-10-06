const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    debugger;
    let result = '';
    let arr = [];
      for (let i = 0; i < members.length; i++){
        if (typeof members[i] == 'string' && members[i] != undefined){
          arr[i] = members[i].trim().toUpperCase().split('').shift();
        }
      }
      result = arr.sort();
      result = result.join('');
      return result;
  }else{
    return false;
  }
};
