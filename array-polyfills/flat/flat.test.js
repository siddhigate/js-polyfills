require("./flat");

describe("flat method", () => {
  test("nested array", () => {
    const arr = [10, 20, ["a", "b"]];
    const result = arr.myFlat();
    const expectedResult = [10, 20, "a", "b"];
    expect(result).toEqual(expectedResult);
  });

  test("double nested array", () => {
    const arr = [10, 20, [["a", "b"]]];
    const result = arr.myFlat();
    const expectedResult = [10, 20, ["a", "b"]];
    expect(result).toEqual(expectedResult);
  });

  test("double nested array and depth 2", () => {
    const arr = [10, 20, [["a", "b"]]];
    const result = arr.myFlat(2);
    const expectedResult = [10, 20, "a", "b"];
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const arr = ["a", undefined, ["c", undefined]];
    const result = arr.myFlat();
    const expectedResult = ["a", undefined, "c", undefined];
    expect(result).toStrictEqual(expectedResult);
  });

  test("array containing empty elements", () => {
    const arr = ["a", , ["c", , "d"]];
    const result = arr.myFlat();
    const expectedResult = ["a", "c", "d"];
    expect(result).toStrictEqual(expectedResult);
  });

  test("deep flat drops empty elements at every level", () => {
    const arr = ["a", , [["c", , "d"]]];
    const result = arr.myDeepFlat();
    const expectedResult = ["a", "c", "d"];
    expect(result).toStrictEqual(expectedResult);
  });
});

