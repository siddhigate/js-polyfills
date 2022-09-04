require("../slice/slice");

Array.prototype.mySplice = function () {
  let result = [];
  let length = this.length;

  if (arguments.length === 0) {
    return result;
  }

  function getStart(start) {
    let result = 0;
    if (!isNaN(parseInt(start))) {
      result = start < 0 ? this.length + parseInt(start) : parseInt(start);
    }

    return result;
  }

  function getDeleteCount(start, deleteCount) {
    let result = 0;
    if (!isNaN(parseInt(deleteCount))) {
      result = parseInt(deleteCount);

      if (result > this.length - start) {
        result = this.length - start;
      }
    }
  }

  function moveLeft(step, start, arr) {
    for (let i = start; i < arr.length; i++) {
      arr[i] = arr[i + step];
    }
  }

  function moveRight(itemsCount, start, arr) {
    for (let i = arr.length - 1; i >= start; i--) {
      arr[i + itemsCount] = arr[i];
    }
  }

  // if only start given -> delete els from start to end
  if (arguments.length === 1) {
    let start = getStart(arguments[0]);

    for (let i = this.length - 1; i >= start; i--) {
      result.unshift(this.pop());
    }
    return result;
  }

  // if start & delete count given
  if (arguments.length === 2) {
    const start = getStart(arguments[0]);
    const deleteCount = getStart(arguments[1]);

    // items to be deleted
    result = this.mySlice(start, deleteCount + 1);

    // shift and delete the elements
    for (let i = start; i < this.length; i++) {
      this[i] = this[i + deleteCount];
    }

    for (let i = 0; i < deleteCount; i++) {
      this.pop();
    }

    return result;
  }

  if (arguments.length > 2) {
    const start = getStart(arguments[0]);
    const deleteCount = getStart(arguments[1]);

    if (deleteCount <= 0) {
      const itemsCount = arguments.length - 2;

      // shift elements forward and add new items
      moveRight(itemsCount, start, this);

      for (let i = 0; i < itemsCount; i++) {
        this[i + start] = arguments[2 + i];
      }

      return result;
    } else {
      // remove previous and add new

      // delete prev els
      // items to be deleted
      result = this.mySlice(start, deleteCount + 1);

      // shift and delete the elements
      moveLeft(deleteCount, start, this);
      for (let i = 0; i < deleteCount; i++) {
        this.pop();
      }

      // add new els
      const itemsCount = arguments.length - 2;

      // shift elements forward and add new items
      moveRight(itemsCount, start, this);

      for (let i = 0; i < itemsCount; i++) {
        this[i + start] = arguments[2 + i];
      }
    }
  }

  return result;
};
