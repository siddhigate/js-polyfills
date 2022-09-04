require("./slice");

describe("slice method", () => {
  test("one positive parameter", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.slice(2);
    const expectedResult = ["c", "d", "e"];
    expect(result).toEqual(expectedResult);
  });

  test("two positive parameters", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySlice(2, 4);
    const expectedResult = ["c", "d"];
    expect(result).toEqual(expectedResult);
  });

  test("one negative parameter", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySlice(-1);
    const expectedResult = ["e"];
    expect(result).toEqual(expectedResult);
  });

  test("two negative parameters", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySlice(-5, -2);
    const expectedResult = ["a", "b", "c"];
    expect(result).toEqual(expectedResult);
  });

  test("empty array", () => {
    const arr = [];
    const result = arr.mySlice(2);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

});
