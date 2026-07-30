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

  test("array containing undefined elements", () => {
    const array = ["a", undefined, "c"];
    const result = array.myShift();
    expect(result).toBe("a");
    expect(array).toStrictEqual([undefined, "c"]);
  });

  test("array containing empty elements", () => {
    const array = ["a", , "c"];
    const result = array.myShift();
    expect(result).toBe("a");
    expect(array).toStrictEqual([, "c"]);
    expect(0 in array).toBe(false);
  });

  test("shifting off an empty element returns undefined", () => {
    const array = [, "b"];
    const result = array.myShift();
    expect(result).toBeUndefined();
    expect(array).toStrictEqual(["b"]);
  });
});
