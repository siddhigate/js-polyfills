require("./all.js");

/**
 *
 * Case 1: All promises resolve
 *
 */

const case1 = [
  new Promise((resolve) => {
    timer2 = setTimeout(resolve, 3000, "resolved");
  }),
  200,
  Promise.resolve("Hello"),
];

Promise.myAll(case1)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// [ "resolved", 200, "Hello"]

/**
 *
 * Case 2: Any of the promises reject
 *
 */

const case2 = [
  Promise.reject("rejected"),
  new Promise((resolve, reject) => {
    timer2 = setTimeout(reject, 3000, "rejectedReason");
  }),
];

Promise.myAll(case2)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// Error: rejected

/**
 *
 * Case 3: Empty array passed
 *
 */

const case3 = [];

Promise.myAll(case3)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// []
