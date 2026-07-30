require("./push");

describe("push method", () => {
  test("push test case", () => {
    const array = ["a", "b", "c", "d", "e"];
    const result = array.myPush("z");
    const expectedResult = 6;
    const expectedArray = ["a", "b", "c", "d", "e", "z"];
    expect(result).toEqual(expectedResult);
    expect(array).toEqual(expectedArray);
  });

  test("array containing undefined elements", () => {
    const array = ["a", undefined, "c"];
    const result = array.myPush("z");
    expect(result).toBe(4);
    expect(array).toStrictEqual(["a", undefined, "c", "z"]);
  });

  test("array containing empty elements", () => {
    const array = ["a", , "c"];
    const result = array.myPush("z");
    expect(result).toBe(4);
    expect(array).toStrictEqual(["a", , "c", "z"]);
  });
});
