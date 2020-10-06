const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity != 'string' || sampleActivity == undefined){
    return false;
  }
  
  if (sampleActivity <= 15 && sampleActivity > 0){
    let k = Math.log(2) / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
    t =  Math.ceil(t);
    return t;
  }else{
    return false;
  }
};
