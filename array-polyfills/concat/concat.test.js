require("./concat.js");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arr4 = [10, [11, 12, 13]];

describe("concat method", () => {
  test("one array param", () => {
    expect(arr1.myConcat(arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("one variable param", () => {
    expect(arr1.myConcat("a")).toEqual([1, 2, 3, "a"]);
  });

  test("one array and one variable param", () => {
    expect(arr1.myConcat(arr2, "z")).toEqual([1, 2, 3, 4, 5, 6, "z"]);
  });

  test("multiple arrays param", () => {
    expect(arr1.myConcat(arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("no param", () => {
    expect(arr1.myConcat()).toEqual([1, 2, 3]);
  });

  test("nested array param", () => {
    expect(arr1.myConcat(arr4)).toEqual([1, 2, 3, 10, [11, 12, 13]]);
  });

  test("array containing undefined elements", () => {
    expect([1, undefined, 3].myConcat([4])).toStrictEqual([1, undefined, 3, 4]);
  });

  test("array containing empty elements", () => {
    expect([1, , 3].myConcat([4])).toStrictEqual([1, , 3, 4]);
  });

  test("empty elements of an array param stay empty", () => {
    expect([0].myConcat([1, , 3])).toStrictEqual([0, 1, , 3]);
  });
});
