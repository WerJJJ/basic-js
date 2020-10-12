const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
    this.type = type;
  }
  encrypt(message, key) {
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (message == undefined || key == undefined) throw new Error;
    for (let i = 0; i < message.length; i++){
      
    }
  }    
  decrypt(message, key) {
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let maxLength;
    let keyNew;
    if (message.length > key.length){
      maxLength = message.length;
    }else{
      maxLength = key.length;
    }
    if (message == undefined || key == undefined) throw new Error;
    for (let i = 0; i < maxLength; i++){
      
    }
  }
}

module.exports = VigenereCipheringMachine;
