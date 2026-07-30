require("./reverse");

describe("reverse method", () => {
  test("reverse test case", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myReverse();
    const expectedResult = [5, 4, 3, 2, 1];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const arr = ["a", undefined, "c", "d"];
    const result = arr.myReverse();
    const expectedResult = ["d", "c", undefined, "a"];
    expect(result).toStrictEqual(expectedResult);
  });

  test("array containing empty elements", () => {
    const arr = ["a", , "c", "d"];
    const result = arr.myReverse();
    expect(result).toStrictEqual(["d", "c", , "a"]);
    expect(2 in result).toBe(false);
  });
});
