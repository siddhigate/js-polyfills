require("./find");

describe("find method", () => {
  test("element found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFind((element) => element % 10 === 0);
    const expectedResult = 10;
    expect(result).toBe(expectedResult);
  });

  test("element not found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFind((element) => element % 3 === 0);
    expect(result).toBeUndefined();
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn(() => false);
    const arr = ["a", undefined, "c"];

    arr.myFind(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn(() => false);
    const arr = ["a", , "c"];

    // find does not skip empty elements, it reads them as undefined
    arr.myFind(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
    expect(fn).toHaveBeenNthCalledWith(3, "c", 2, arr);
  });
});
