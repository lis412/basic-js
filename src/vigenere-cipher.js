const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(forward = true) {
    this.forward = forward;
  }

  processMessage(message, key, charFunction) {
    if (typeof message === "undefined" || typeof key === "undefined")
      throw new Error();

    let keyIndex = 0;
    let res = [];
    for (let char of message) {
      if (/[a-zA-Z]/.test(char)) {
        res.push(
          charFunction(
            char.toUpperCase().charCodeAt(0),
            key[keyIndex++ % key.length].toUpperCase().charCodeAt(0)
          )
        );
      } else {
        res.push(char);
      }
    }

    if (!this.forward) res = res.reverse();
    return res.join("");
  }

  encrypt(message, key) {
    return this.processMessage(message, key, (charCode, keyCode) =>
      String.fromCharCode(((charCode + keyCode) % 26) + 65)
    );
  }

  decrypt(message, key) {
    return this.processMessage(message, key, (charCode, keyCode) =>
      String.fromCharCode(((charCode + 26 - keyCode) % 26) + 65)
    );
  }
}

module.exports = VigenereCipheringMachine;
