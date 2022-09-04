Array.prototype.myJoin = function (seperator = ",") {
  let result = "";

  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      result += this[i];
    } else {
      result += this[i] + seperator;
    }
  }

  return result;
};
