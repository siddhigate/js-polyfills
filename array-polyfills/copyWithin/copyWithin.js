Array.prototype.myCopyWithin = function (
  target = 0,
  start = 0,
  end = this.length
) {
  if (target < 0) {
    target = this.length + target;
  }

  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + end;
  }

  let count = Math.min(end - start, this.length - target);
  let step = 1;

  // when the ranges overlap forwards, copy backwards so sources aren't
  // overwritten before they are read
  if (start < target && target < start + count) {
    step = -1;
    start = start + count - 1;
    target = target + count - 1;
  }

  while (count > 0) {
    if (start in this) {
      this[target] = this[start];
    } else {
      delete this[target];
    }

    start += step;
    target += step;
    count--;
  }

  return this;
};
