Promise.myAny = (promises) => {
  const errorsList = new Array(promises.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => resolve(res))
        .catch((err) => {
          errorsList[idx] = err;
          counter++;

          if (counter === promises.length) {
            reject(
              new AggregateError(errorsList, "All promises were rejected")
            );
          }
        });
    });
  });
};
