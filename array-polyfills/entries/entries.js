Array.prototype.myEntries = function () {
  let keys = [];
  for (let i = 0; i < this.length; i++) {
    keys.push([i, this[i]]);
  }

  function* iterator() {
    yield* keys;
  }

  return iterator();
};
