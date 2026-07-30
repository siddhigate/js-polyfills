require("./flatMap");

describe("flatMap method", () => {
  test("test case 1", () => {
    const arr = [10, 21, 30, 42, 50];
    const result = arr.myFlatMap((el) => (el % 10 === 0 ? [] : [el]));
    const expectedResult = [21, 42];
    expect(result).toEqual(expectedResult);
  });

  test("test case 2", () => {
    const arr = [10, [21], 30, 42, 50];
    const result = arr.myFlatMap((el) => el);
    const expectedResult = [10, 21, 30, 42, 50];
    expect(result).toEqual(expectedResult);
  });

  test("test case 3", () => {
    const arr = [10, [[21]], 30, 42, 50];
    const result = arr.myFlatMap((el) => el);
    const expectedResult = [10, [21], 30, 42, 50];
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn((element) => element);
    const arr = ["a", undefined, "c"];

    const result = arr.myFlatMap(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
    expect(result).toStrictEqual(["a", undefined, "c"]);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn((element) => element);
    const arr = ["a", , "c"];

    const result = arr.myFlatMap(fn);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "c", 2, arr);
    expect(result).toStrictEqual(["a", "c"]);
  });
});
