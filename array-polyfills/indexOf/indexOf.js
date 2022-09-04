Array.prototype.myIndexOf = function (element, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }

  return -1;
};
