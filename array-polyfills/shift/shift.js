Array.prototype.myShift = function () {
  if (this.length > 0) {
    const firstEl = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length -= 1;

    return firstEl;
  }
};
