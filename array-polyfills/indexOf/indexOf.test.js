require("./indexOf");

describe("findIndex method", () => {
  test("element present", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIndexOf("a");
    const expectedResult = 0;
    expect(result).toBe(expectedResult);
  });

  test("element not present", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIndexOf("z");
    const expectedResult = -1;
    expect(result).toBe(expectedResult);
  });

  test("element present after a given index", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIndexOf("a", 1);
    const expectedResult = 5;
    expect(result).toBe(expectedResult);
  });
});
