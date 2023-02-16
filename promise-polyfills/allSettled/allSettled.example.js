require("./allSettled.js");

/**
 *
 * Case: When all promises settle
 *
 */

const case1 = [
  new Promise((resolve) => {
    timer2 = setTimeout(resolve, 3000, "resolved");
  }),
  200,
  Promise.reject("Hello"),
];

Promise.myAllSettled(case1)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// Output:
// [
//  { status: 'fulfilled', value: 'resolved' },
//  { status: 'fulfilled', value: 200 },
//  { status: 'rejected', reason: 'Hello' }
// ]
