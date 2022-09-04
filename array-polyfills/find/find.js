Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};
