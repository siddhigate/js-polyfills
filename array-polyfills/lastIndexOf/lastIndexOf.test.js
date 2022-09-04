require("./lastIndexOf");

describe("findIndex method", () => {
  test("element present", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myLastIndexOf("a");
    const expectedResult = 5;
    expect(result).toBe(expectedResult);
  });

  test("element not present", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myLastIndexOf("z");
    const expectedResult = -1;
    expect(result).toBe(expectedResult);
  });

  test("element present before a given index", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myLastIndexOf("a", 4);
    const expectedResult = 0;
    expect(result).toBe(expectedResult);
  });
});
