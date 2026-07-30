Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (Object.getOwnPropertyDescriptor(this, i)) {
      cb(this[i], i, this);
    }
  }
};
