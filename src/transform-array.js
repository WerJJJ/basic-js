const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice(0);
   if (Array.isArray(newArr)){
    for (let i = 0; i < newArr.length; i++){
      if ( newArr[i] == '--discard-next'){
        if (newArr[i+1] == undefined){
          newArr.splice(i,1);
        }else{
          delete newArr[i];
          delete newArr[i+1];
        }
      }else
      if ( newArr[i] == '--discard-prev'){
        if (newArr[i-1] == undefined){
          newArr.splice(i,1);
        }else{
          delete newArr[i];
          delete newArr[i-1];
        }
      }else 
      if ( newArr[i] == '--double-next'){
        if (newArr[i+1] == undefined){
          newArr.splice(i,1);
        }else{
          newArr.splice(i,1,newArr[i+1]);
        }
      }else
      if ( newArr[i] == '--double-prev'){
        if (newArr[i-1] == undefined){
          newArr.splice(i,1);
        }else{
          newArr.splice(i,1,newArr[i-1]);
        }
      }
    }
    newArr = newArr.filter(function (el) {
      return el != null;
    });
    return newArr;
   }else{
     throw new Error;
   }
};
