const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  debugger;
  let result = "";
  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  for (let i = 0; i < options.repeatTimes; i++){
    result = result + str;
    for (let j = 0; j < options.additionRepeatTimes; j++){
      result += options.addition;
      if ( options.additionRepeatTimes != 1){
        if (j != options.additionRepeatTimes - 1) result += options.additionSeparator;
      }
    } 
    if (i != options.repeatTimes - 1) result = result + options.separator;
  }
  if (options.additionRepeatTimes == undefined) {
    if (options.addition != undefined) result += options.addition;
  }
    return result;
  };
    