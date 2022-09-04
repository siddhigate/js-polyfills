Array.prototype.myReverse = function () {
  let start = 0,
    end = this.length - 1;

  while (start < end) {
    let temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--;
  }

  return this;
};
