Promise.myAllSettled = (promises) => {
  const results = new Array(promises.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = { status: "fulfilled", value: res };
        })
        .catch((err) => {
          results[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          counter++;
          if (counter === promises.length) {
            resolve(results);
          }
        });
    });
  });
};
