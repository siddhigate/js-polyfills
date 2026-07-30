require("./every");

const arr1 = [10, 21, 32, 43, 54, 65];
const arr2 = [10, 22, 30, 42, 54, 66];

describe("every method", () => {
  test("positive case", () => {
    const isAllEven = arr1.myEvery((el) => el % 2 === 0)
    expect(isAllEven).toEqual(false);
  });

  test("negative case", () => {
    const isAllEven = arr2.myEvery((el) => el % 2 === 0)
    expect(isAllEven).toEqual(true);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn((element) => element !== undefined);
    const arr = ["a", undefined, "c"];

    const result = arr.myEvery(fn);

    expect(result).toBe(false);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn((element) => element !== undefined);
    const arr = ["a", , "c"];

    const result = arr.myEvery(fn);

    expect(result).toBe(true);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "c", 2, arr);
  });
});
