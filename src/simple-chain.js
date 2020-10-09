const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: "", 
  count: 0,
  firstEl: true,


  getLength() {
    return this.count;
  },
  addLink(value) {
    if (value === undefined){
      value = " ";
    }
    if (this.firstEl == true){
      this.result = this.result + `( ${value} )`;
      this.firstEl = false;
    }else{
      this.result = this.result + `~~( ${value} )`;
    }
    this.count++;
    return this;

  },
  removeLink(position) {
    if (position < 1 || position > this.count || typeof position != 'number' || position != Math.round(position)){
      this.result = "";
      this.firstEl = true;
      throw new Error;
    }

    this.result = this.result.split('~~');
    this.result.splice(position-1, 1);
    this.result = this.result.join('~~');
    this.count--;
    return this;
  },
  reverseChain() {
    this.result = this.result.split('~~');
    this.result.reverse();
    this.result = this.result.join('~~');
    
    return this;

  },
  finishChain() {
    this.result = this.result.split('');
    this.result = this.result.join('');
    let temp = this.result;
    this.result = "";
    this.firstEl = true;
    return temp;
  }
};

module.exports = chainMaker;
