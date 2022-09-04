Array.prototype.mySlice = function (start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + end;
  }

  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(this[i]);
  }

  return arr;
};
