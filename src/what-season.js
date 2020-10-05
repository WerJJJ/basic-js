const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined){
    return 'Unable to determine the time of year!';
  }
  if (typeof date != 'object'){
    throw new Error('Error');
  }


  let month; 
  month = date.getMonth() + 1;
  if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('Error');

  if (month > 0 && month <= 12){
    if (month == 12 || month <= 2 ){
      return "winter";  
    }else
    if (month >= 3 && month <= 5){
      return "spring";
    }else
    if (month >= 6 && month <= 8){
      return "summer";
    }else
    if( month >= 9 && month <= 11){
      return "autumn";
    } 
  }else{
    throw new Error('Error');
  }
};
