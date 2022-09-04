Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    result.push(value);
  }

  return result;
};
