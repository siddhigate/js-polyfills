Array.prototype.myConcat = function () {
  let newArr = [];

  // copies arr onto the end of newArr, keeping empty elements empty
  function append(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        newArr[newArr.length] = arr[i];
      } else {
        newArr.length += 1;
      }
    }
  }

  append(this);

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      append(arguments[i]);
    } else {
      newArr[newArr.length] = arguments[i];
    }
  }

  return newArr;
};
