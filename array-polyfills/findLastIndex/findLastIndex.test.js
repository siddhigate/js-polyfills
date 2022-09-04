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
});
