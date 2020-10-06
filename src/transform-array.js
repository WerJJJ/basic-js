const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr;
   if (Array.isArray(arr)){
    for (let i = 0; i < newArr.length; i++){
      if ( newArr[i] == '--discard-next'){
        if (arr[i+1] == undefined){
          newArr.splice(i,1);
        }else{
          delete arr[i];
          delete arr[i+1];
        }
      }else
      if ( newArr[i] == '--discard-prev'){
        if (arr[i-1] == undefined){
          newArr.splice(i,1);
        }else{
          delete arr[i];
          delete arr[i-1];
        }
      }else 
      if ( newArr[i] == '--double-next'){
        if (arr[i+1] == undefined){
          newArr.splice(i,1);
        }else{
          newArr.splice(i,1,arr[i+1]);
        }
      }else
      if ( newArr[i] == '--double-prev'){
        if (arr[i-1] == undefined){
          newArr.splice(i,1);
        }else{
          newArr.splice(i,1,arr[i-1]);
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
