require("./copyWithin");

describe("copyWithin method", () => {

  test("one param:", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myCopyWithin(4);
    const expectedResult = ['a', 'b', 'c', 'd', 'a'];
    expect(result).toEqual(expectedResult);
  });

  test("three params: target, start and end", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myCopyWithin(0, 3, 4);
    const expectedResult = ["d", "b", "c", "d", "e"];
    expect(result).toEqual(expectedResult);
  });

  test("two params: target and start", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myCopyWithin(1, 3);
    const expectedResult = ["a", "d", "e", "d", "e"];
    expect(result).toEqual(expectedResult);
  });

  test("two params: target and negative start", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myCopyWithin(1, -3);
    const expectedResult = ["a", "c", "d", "e", "e"];
    expect(result).toEqual(expectedResult);
  });
});
