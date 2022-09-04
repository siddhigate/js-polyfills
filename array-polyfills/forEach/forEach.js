Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== "undefined") {
      cb(this[i], i, this);
    }
  }
};
