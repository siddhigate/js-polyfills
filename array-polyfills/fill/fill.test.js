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
});
