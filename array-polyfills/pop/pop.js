Array.prototype.myPop = function () {
  if (this.length > 0) {
    let lastEl = this[this.length - 1];
    this.length -= 1;
    return lastEl;
  }
};
