Array.prototype.myUnshift = function () {
  if (arguments.length > 0) {
    const oldLength = this.length;
    // grow first, so moving an empty element can delete its new slot
    this.length = oldLength + arguments.length;

    // move elements of the array ahead
    for (let i = oldLength - 1; i >= 0; i--) {
      if (i in this) {
        this[i + arguments.length] = this[i];
      } else {
        delete this[i + arguments.length];
      }
    }

    // add the args elements at the start
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }

  return this.length;
};
