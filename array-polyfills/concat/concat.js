Array.prototype.myConcat = function () {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(this[i]);
  }

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const dummyArr = arguments[i];
      for (let i = 0; i < dummyArr.length; i++) {
        newArr.push(dummyArr[i]);
      }
    } else {
      newArr.push(arguments[i]);
    }
  }

  return newArr;
};
