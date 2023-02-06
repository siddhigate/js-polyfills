Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) {
      cb(undefined, i, this);
    } else{
      cb(this[i], i, this);
    }
  }
};
