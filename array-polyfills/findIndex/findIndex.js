Array.prototype.myFindIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
