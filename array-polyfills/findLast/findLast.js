Array.prototype.myFindLast = function (cb) {
  for (let i = this.length; i >= 0; i--) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};
