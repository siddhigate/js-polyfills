require("./findIndex");

describe("findIndex method", () => {
  test("element found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFindIndex((element) => element % 20 === 0);
    const expectedResult = 1;
    expect(result).toBe(expectedResult);
  });

  test("element not found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFindIndex((element) => element % 3 === 0);
    const expectedResult = -1;
    expect(result).toBe(expectedResult);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn(() => false);
    const arr = ["a", undefined, "c"];

    arr.myFindIndex(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn(() => false);
    const arr = ["a", , "c"];

    // findIndex does not skip empty elements, it reads them as undefined
    arr.myFindIndex(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
    expect(fn).toHaveBeenNthCalledWith(3, "c", 2, arr);
  });
});
