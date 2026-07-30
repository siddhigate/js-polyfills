Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this && cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
