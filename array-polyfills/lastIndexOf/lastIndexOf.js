Array.prototype.myLastIndexOf = function (
  element,
  fromIndex = this.length - 1
) {
  for (let i = fromIndex; i >= 0; i--) {
    if (i in this && this[i] === element) {
      return i;
    }
  }
  return -1;
};
