require("./any.js");

/**
 *
 * Case 1: Any of the promises resolve
 *
 */

const case1 = [
  new Promise((resolve) => {
    timer2 = setTimeout(resolve, 3000, "resolved");
  }),
  200,
  Promise.reject("Hello"),
];

Promise.myAny(case1)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// 200

/**
 *
 * Case 2: All of the promises reject
 *
 */

const case2 = [
  Promise.reject("rejected"),
  new Promise((resolve, reject) => {
    timer2 = setTimeout(reject, 3000, "rejectedReason");
  }),
];

Promise.myAny(case2)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err.name, err.message, err.errors));

// Output:
// Error: AggregateError All promises were rejected ["rejected", "rejectedReason"]
