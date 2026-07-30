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

  test("array containing undefined elements", () => {
    const array = ["a", undefined, "c"];
    const result = array.myUnshift("z");
    expect(result).toBe(4);
    expect(array).toStrictEqual(["z", "a", undefined, "c"]);
  });

  test("array containing empty elements", () => {
    const array = ["a", , "c"];
    const result = array.myUnshift("z");
    expect(result).toBe(4);
    expect(array).toStrictEqual(["z", "a", , "c"]);
  });
});
