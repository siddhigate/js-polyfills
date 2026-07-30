Array.prototype.myShift = function () {
  if (this.length > 0) {
    const firstEl = this[0];

    for (let i = 0; i < this.length - 1; i++) {
      if (i + 1 in this) {
        this[i] = this[i + 1];
      } else {
        delete this[i];
      }
    }

    this.length -= 1;

    return firstEl;
  }
};
