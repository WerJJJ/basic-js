const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr) {
    debugger;
    let deep = 0;
    for (let i = 0; i < arr.length; i++){
      let typeArr = Object.prototype.toString.call(arr[i]) === '[object Array]';
      let tempDeep = 0;
      if (i === arr.length - 1){
        tempDeep = 1;
      }
      if (typeArr) {
        tempDeep = (1 + this.calculateDepth(arr[i])); 
      }
      if (typeArr && arr[i].length == 0){
        tempDeep = 2;
      }
      if (tempDeep > deep){
        deep = tempDeep;
      }
    }
    return deep;
  }
};