const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${String(value)} )`);

    return this;
  },

  removeLink(position) {
    if (isNaN(position) || typeof(this.chain[position-1]) === 'undefined') {
      this.chain = []; //reset data
      throw new Error();
    }

    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = this.chain.reduce((chainStr, item) => `${chainStr}~~${item}`);
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;


// chainMaker
//   .addLink('GHI')
//   .addLink(null)
//   .reverseChain()
//   .addLink(333)
//   .reverseChain()
//   .reverseChain()
//   .addLink(0)
//   .reverseChain()
//   .reverseChain()
//   .addLink('GHI')
//   .finishChain()