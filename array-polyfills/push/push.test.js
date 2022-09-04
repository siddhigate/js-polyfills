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
});
