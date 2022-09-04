Array.prototype.myUnshift = function () {
  if (arguments.length > 0) {
    // move elements of the array ahead
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }

    // add the args elements at the start
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }

  return this.length;
};
