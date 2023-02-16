Promise.myAll = function (promises) {
  const result = [];
  let resolvedCount = 0;

  if(promises.length === 0) {
    return Promise.resolve(promises)
  }

  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          result[idx] = res;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
            reject(err)
        });
    });
  });
};