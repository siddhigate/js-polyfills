require("./map");

describe("map method", () => {
  test("map test case", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myMap((el) => el * 2);
    const expectedResult = [2, 4, 6, 8, 10];
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn((element) => element);
    const arr = ["a", undefined, "c"];

    const result = arr.myMap(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
    expect(result).toStrictEqual(["a", undefined, "c"]);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn((element) => element);
    const arr = ["a", , "c"];

    const result = arr.myMap(fn);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "c", 2, arr);
    expect(result).toStrictEqual(["a", , "c"]);
  });
});
