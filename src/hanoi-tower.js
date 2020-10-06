const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2,disksNumber) - 1;
  let secondPerChange = turnsSpeed / 3600;
  let seconds = Math.floor(turns/secondPerChange);
  let obj = {
    turns: turns,
    seconds: seconds
  }
  return obj; 
};
