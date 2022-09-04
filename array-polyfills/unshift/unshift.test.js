require("./unshift");

describe("unshift method", () => {
  test("unshift test case", () => {
    const array = ["a", "b", "c", "d", "e"];
    const result = array.myUnshift("z", "y", "p");
    const expectedResult = 8;
    const expectedArray = ["z", "y", "p", "a", "b", "c", "d", "e"];
    expect(result).toBe(expectedResult);
    expect(array).toEqual(expectedArray);
  });
});
