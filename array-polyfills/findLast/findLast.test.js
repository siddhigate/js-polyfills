require("./findLast");

describe("findLast method", () => {
  test("element found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFindLast((element) => element % 5 === 0);
    const expectedResult = 55;
    expect(result).toBe(expectedResult);
  });

  test("element not found", () => {
    const arr = [10, 20, 31, 44, 55, 67];
    const result = arr.myFindLast((element) => element % 3 === 0);
    expect(result).toBeUndefined();
  });
});
