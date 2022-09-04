function defaultComparator(a, b) {
  a = a.toString();
  b = b.toString();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

Array.prototype.mySort = function (cb = defaultComparator) {
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (cb(this[i], this[j]) > 0) {
        var swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }
  }
};
