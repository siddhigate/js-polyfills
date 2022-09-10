Array.prototype.myJoin = function (separator = ",") {
  let result = "";

  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      result += this[i];
    } else {
      result += this[i] + separator;
    }
  }

  return result;
};