Array.prototype.mySplice = function () {
  let returnResult = [];
  let start, deleteCount;
  let items = [];

  if (arguments.length === 0) {
    return returnResult;
  }

  // start
  start = arguments[0];
  if (start >= this.length) {
    return returnResult;
  }
  if (start < 0) {
    start = this.length + start;
  }

  // deleteCount
  if (arguments.length === 1) {
    deleteCount = this.length - start;
  }
  if (arguments.length >= 2) {
    deleteCount = arguments[1];

    if (deleteCount > this.length - start) {
      deleteCount = this.length - start;
    }
  }

  // items
  if (arguments.length > 2) {
    for (let i = 2; i < arguments.length; i++) {
      items.push(arguments[i]);
    }
  }

  // delete elements if delete count > 0
  if (deleteCount > 0) {
    for (let i = 0; i < deleteCount; i++) {
      if (start + i in this) {
        returnResult[i] = this[start + i];
      } else {
        returnResult.length += 1;
      }
    }

    for (let i = start, j = 0; i <= this.length - deleteCount; i++, j++) {
      const from = start + j + deleteCount;
      if (from in this) {
        this[start + j] = this[from];
      } else {
        delete this[start + j];
      }
    }

    this.length = this.length - deleteCount;
  }

  // add elements if items are provided
  if (items.length > 0) {
    const oldLength = this.length;
    // grow first, so moving an empty element can delete its new slot
    this.length = oldLength + items.length;

    for (let i = oldLength - 1; i >= start; i--) {
      if (i in this) {
        this[i + items.length] = this[i];
      } else {
        delete this[i + items.length];
      }
    }

    for (let i = 0; i < items.length; i++) {
      this[start + i] = items[i];
    }
  }
  return returnResult;
};
