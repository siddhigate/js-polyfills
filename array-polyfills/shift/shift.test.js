require("./shift");

describe("shift method", () => {
  test("shift test case", () => {
    const array = ["a", "b", "c", "d", "e"];
    const result = array.myShift();
    const expectedResult = "a";
    const expectedArray = ["b", "c", "d", "e"];
    expect(result).toBe(expectedResult);
    expect(array).toEqual(expectedArray);
  });

  test("shift on empty array", () => {
    const array = [];
    const result = array.myShift();
    const expectedArray = [];
    expect(result).toBeUndefined();
    expect(array).toEqual(expectedArray);
  });
});
