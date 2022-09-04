require("./pop");

describe("pop method", () => {
  test("pop test case", () => {
    const array = ["a", "b", "c", "d", "e"];
    const result = array.myPop();
    const expectedResult = "e";
    const expectedArray = ["a", "b", "c", "d"];
    expect(result).toBe(expectedResult);
    expect(array).toEqual(expectedArray);
  });

  test("pop on empty array", () => {
    const array = [];
    const result = array.myPop();
    const expectedArray = [];
    expect(result).toBeUndefined();
    expect(array).toEqual(expectedArray);
  });
});
