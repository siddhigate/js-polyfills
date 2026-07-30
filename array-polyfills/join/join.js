Array.prototype.myJoin = function (separator = ",") {
  let result = "";

  for (let i = 0; i < this.length; i++) {
    if (i > 0) {
      result += separator;
    }

    // empty, undefined and null elements all stringify to ""
    if (this[i] !== undefined && this[i] !== null) {
      result += this[i];
    }
  }

  return result;
};
