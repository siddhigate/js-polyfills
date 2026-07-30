Array.prototype.myReduce = function (cb, initialValue) {
  let result;
  let i = 0;

  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    // no initialValue: seed with the first element that is not empty
    while (i < this.length && !(i in this)) {
      i++;
    }

    if (i >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    result = this[i];
    i++;
  }

  for (; i < this.length; i++) {
    if (i in this) {
      result = cb(result, this[i], i, this);
    }
  }

  return result;
};
