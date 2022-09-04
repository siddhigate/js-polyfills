require("./reverse");

describe("reverse method", () => {
  test("reverse test case", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myReverse();
    const expectedResult = [5, 4, 3, 2, 1];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedResult);
  });
});
