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

  test("array containing undefined elements", () => {
    const arr = ["a", undefined, "c"];
    const result = arr.myCopyWithin(0, 1);
    const expectedResult = [undefined, "c", "c"];
    expect(result).toStrictEqual(expectedResult);
  });

  test("array containing empty elements", () => {
    const arr = ["a", , "c"];
    const result = arr.myCopyWithin(0, 1);
    expect(result).toStrictEqual([, "c", "c"]);
    expect(0 in result).toBe(false);
  });

  test("overlapping copy that moves an empty element", () => {
    const arr = ["a", , "c"];
    const result = arr.myCopyWithin(1, 0);
    expect(result).toHaveLength(3);
    expect(result[0]).toBe("a");
    expect(result[1]).toBe("a");
    expect(2 in result).toBe(false);
  });
});
