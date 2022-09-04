Array.prototype.myLastIndexOf = function (
  element,
  fromIndex = this.length - 1
) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};
