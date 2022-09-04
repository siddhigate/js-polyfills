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
});
