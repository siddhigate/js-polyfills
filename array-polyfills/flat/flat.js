Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  (function flatten(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        flatten(arr[i], depth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  })(this, depth);

  return result;
};

Array.prototype.myDeepFlat = function () {
  let result = [];

  (function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  })(this);

  return result;
};
