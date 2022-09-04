require("./includes");

describe("findIndex method", () => {
  test("element found", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIncludes("a");
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  test("element found after an index", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIncludes("a", 3);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  test("element not found", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIncludes("z");
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });

  test("element not found after an index", () => {
    const arr = ["a", "b", "c", "d", "e", "a"];
    const result = arr.myIncludes("b", 3);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});
