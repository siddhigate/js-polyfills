Array.prototype.myMap = function (cb) {
  let result = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = cb(this[i], i, this);
    }
  }

  return result;
};
