Array.prototype.myReduce = function (cb, initialValue) {
  let result;
  let startIndex = 0;

  if (arguments.length <= 1) {
    result = this[0];
    startIndex = 1;
  }

  if (arguments.length >= 2) {
    result = initialValue;
  }

  for (let i = startIndex; i < this.length; i++) {
    result = cb(result, this[i]);
  }

  return result;
};
