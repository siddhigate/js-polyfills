Array.prototype.myFlatMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    let cbRes = cb(this[i], i, this);

    if (Array.isArray(cbRes)) {
      for (let i = 0; i < cbRes.length; i++) {
        result.push(cbRes[i]);
      }
    } else {
      result.push(cbRes);
    }
  }

  return result;
};
