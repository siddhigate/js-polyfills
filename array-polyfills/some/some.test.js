require("./some");

describe("every method", () => {
  test("positive case", () => {
    const arr = [10, 21, 32, 43, 54, 65];
    const hasEven = arr.mySome((el) => el % 2 === 0);
    expect(hasEven).toEqual(true);
  });

  test("negative case", () => {
    const arr = [10, 22, 30, 42, 54, 66];
    const hasOdd = arr.mySome((el) => el % 2 !== 0);
    expect(hasOdd).toEqual(false);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn((element) => element === undefined);
    const arr = ["a", undefined, "c"];

    const result = arr.mySome(fn);

    expect(result).toBe(true);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn((element) => element === undefined);
    const arr = ["a", , "c"];

    const result = arr.mySome(fn);

    expect(result).toBe(false);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "c", 2, arr);
  });
});
