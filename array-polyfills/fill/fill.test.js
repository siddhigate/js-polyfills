require("./fill");

describe("fill method", () => {
  test("fill all elements", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myFill("*");
    const expectedResult = ["*", "*", "*", "*", "*"];
    expect(result).toEqual(expectedResult);
  });

  test("fill within positive index", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myFill("*", 1, 3);
    const expectedResult = ["a", "*", "*", "d", "e"];
    expect(result).toEqual(expectedResult);
  });

  test("fill within negative index", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.myFill("*", -4, -1);
    const expectedResult = ["a", "*", "*", "*", "e"];
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const arr = ["a", undefined, "c"];
    expect(arr.myFill("*")).toStrictEqual(["*", "*", "*"]);
  });

  test("array containing empty elements", () => {
    // fill replaces empty elements with real values
    const arr = ["a", , "c"];
    expect(arr.myFill("*")).toStrictEqual(["*", "*", "*"]);
  });
});
