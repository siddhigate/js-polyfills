Array.prototype.myKeys = function () {
  let keys = [];
  for (let i = 0; i < this.length; i++) {
    keys.push(i);
  }

  function* iterator() {
    yield* keys;
  }

  return iterator();
};
