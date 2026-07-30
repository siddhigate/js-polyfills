require("./pop");

describe("pop method", () => {
  test("pop test case", () => {
    const array = ["a", "b", "c", "d", "e"];
    const result = array.myPop();
    const expectedResult = "e";
    const expectedArray = ["a", "b", "c", "d"];
    expect(result).toBe(expectedResult);
    expect(array).toEqual(expectedArray);
  });

  test("pop on empty array", () => {
    const array = [];
    const result = array.myPop();
    const expectedArray = [];
    expect(result).toBeUndefined();
    expect(array).toEqual(expectedArray);
  });

  test("array containing undefined elements", () => {
    const array = ["a", undefined, "c"];
    const result = array.myPop();
    expect(result).toBe("c");
    expect(array).toStrictEqual(["a", undefined]);
  });

  test("array containing empty elements", () => {
    const array = ["a", , "c"];
    const result = array.myPop();
    expect(result).toBe("c");
    expect(array).toStrictEqual(["a", ,]);
    expect(1 in array).toBe(false);
  });

  test("popping an empty element returns undefined", () => {
    const array = ["a", ,];
    const result = array.myPop();
    expect(result).toBeUndefined();
    expect(array).toStrictEqual(["a"]);
  });
});
