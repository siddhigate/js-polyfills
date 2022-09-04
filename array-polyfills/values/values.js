Array.prototype.myValues = function () {
  let keys = [];
  for (let i = 0; i < this.length; i++) {
    keys.push(this[i]);
  }

  function* iterator() {
    yield* keys;
  }

  return iterator();
};
