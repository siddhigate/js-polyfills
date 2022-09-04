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
});

