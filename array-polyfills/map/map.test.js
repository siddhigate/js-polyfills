require("./map");

describe("map method", () => {
  test("map test case", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.map((el) => el * 2);
    const expectedResult = [2, 4, 6, 8, 10];
    expect(result).toEqual(expectedResult);
  });

});
