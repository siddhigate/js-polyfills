require("./forEach");

describe("forEach method", () => {
  test("test case 1", () => {
    const arr = [10, 21, 30, 42, 50];
    const result = {};
    arr.myForEach((element, index) => (result[index] = element));
    const expectedResult = { 0: 10, 1: 21, 2: 30, 3: 42, 4: 50 };
    expect(result).toEqual(expectedResult);
  });

  test("test case 2", () => {
    const arr = ["a", "b", "c", , 0, "d"];
    const result = {};
    arr.myForEach((element, index) => (result[index] = element));
    const expectedResult = { 0: "a", 1: "b", 2: "c", 4: 0, 5: "d" };
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn();
    const arr = ["a", undefined, "c"];

    arr.myForEach(fn);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, undefined, 1, arr);
    expect(fn).toHaveBeenNthCalledWith(3, "c", 2, arr);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn();
    const arr = ["a", , "c"];

    arr.myForEach(fn);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "c", 2, arr);
  });
});
