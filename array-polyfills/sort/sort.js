function defaultComparator(a, b) {
  a = String(a);
  b = String(b);
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

Array.prototype.mySort = function (cb = defaultComparator) {
  // the comparator never sees undefined or empty elements: they are sorted
  // to the end, undefined first and empty elements last
  const values = [];
  let undefinedCount = 0;

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) {
      continue;
    }
    if (this[i] === undefined) {
      undefinedCount++;
    } else {
      values.push(this[i]);
    }
  }

  for (var i = 0; i < values.length; i++) {
    for (var j = i + 1; j < values.length; j++) {
      if (cb(values[i], values[j]) > 0) {
        var swap = values[i];
        values[i] = values[j];
        values[j] = swap;
      }
    }
  }

  for (let i = 0; i < values.length; i++) {
    this[i] = values[i];
  }

  for (let i = 0; i < undefinedCount; i++) {
    this[values.length + i] = undefined;
  }

  for (let i = values.length + undefinedCount; i < this.length; i++) {
    delete this[i];
  }

  return this;
};
