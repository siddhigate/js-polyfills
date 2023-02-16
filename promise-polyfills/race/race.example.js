require("./race.js");

/**
 *
 * Case 1: The first settled promise resolve
 *
 */

const case1 = [
  new Promise((resolve) => {
    timer2 = setTimeout(resolve, 3000, "resolved");
  }),
  200,
  Promise.reject("Hello"),
];

Promise.myRace(case1)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// 200

/**
 *
 * Case 2: The first settled promise reject
 *
 */

const case2 = [
  Promise.reject("rejected"),
  new Promise((resolve) => {
    timer2 = setTimeout(resolve, 3000, "rejectedReason");
  }),
];

Promise.myRace(case2)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// Error: rejected
