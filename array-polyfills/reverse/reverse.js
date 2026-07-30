Array.prototype.myReverse = function () {
  let start = 0,
    end = this.length - 1;

  while (start < end) {
    // an empty element stays empty when it is swapped
    const hasStart = start in this;
    const hasEnd = end in this;
    const temp = this[start];

    if (hasEnd) {
      this[start] = this[end];
    } else {
      delete this[start];
    }

    if (hasStart) {
      this[end] = temp;
    } else {
      delete this[end];
    }

    start++;
    end--;
  }

  return this;
};
