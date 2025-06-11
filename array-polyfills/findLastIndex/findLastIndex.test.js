require("./findLastIndex");

describe("findIndex method", () => {
  test("element found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFindLastIndex((element) => element % 5 === 0);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });

  test("element not found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFindLastIndex((element) => element % 3 === 0);
    const expectedResult = -1;
    expect(result).toBe(expectedResult);
  });

  test("invokes callback in the expected way", () => {
    const arr = [123, 456, 789];
    const callback = jest.fn(() => false);
    arr.myFindLastIndex(callback);
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenNthCalledWith(1, 789, 2, arr);
    expect(callback).toHaveBeenNthCalledWith(2, 456, 1, arr);
    expect(callback).toHaveBeenNthCalledWith(3, 123, 0, arr);
  });

  test("does not invoke callback after element found", () => {
    const arr = [123, 456, 789];
    const callback = jest.fn((element) => element === 456);
    arr.myFindLastIndex(callback);
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(1, 789, 2, arr);
    expect(callback).toHaveBeenNthCalledWith(2, 456, 1, arr);
  });
});
