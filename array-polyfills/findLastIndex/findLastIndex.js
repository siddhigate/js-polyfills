Array.prototype.myFindLastIndex = function (cb) {
  for (let i = this.length; i >= 0; i--) {
    if (cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
