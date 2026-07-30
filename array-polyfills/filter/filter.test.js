require("./filter");

describe("filter method", () => {
  test("some elements filtered", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myFilter((el) => el % 2 === 0);
    const expectedResult = [2, 4];
    expect(result).toEqual(expectedResult);
  });

  test("all elements filtered", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myFilter((el) => el > 0);
    const expectedResult = [1, 2, 3, 4, 5];
    expect(result).toEqual(expectedResult);
  });

  test("no element filtered", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myFilter((el) => el > 10);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn(() => true);
    const arr = ["a", undefined, "c"];

    const result = arr.myFilter(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
    expect(result).toStrictEqual(["a", undefined, "c"]);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn(() => true);
    const arr = ["a", , "c"];

    const result = arr.myFilter(fn);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "c", 2, arr);
    expect(result).toStrictEqual(["a", "c"]);
  });
});
