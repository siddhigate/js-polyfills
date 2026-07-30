Array.prototype.myReduceRight = function (cb, initialValue) {
  let result;
  let i = this.length - 1;

  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    // no initialValue: seed with the last element that is not empty
    while (i >= 0 && !(i in this)) {
      i--;
    }

    if (i < 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    result = this[i];
    i--;
  }

  for (; i >= 0; i--) {
    if (i in this) {
      result = cb(result, this[i], i, this);
    }
  }

  return result;
};
