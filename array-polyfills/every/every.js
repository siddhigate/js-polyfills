Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this && !cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
