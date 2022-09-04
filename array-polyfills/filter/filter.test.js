require("./filter");

describe("filter method", () => {
  test("some elements filtered", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myFilter((el) => el % 2 === 0);
    const expectedResult = [2, 4];
    expect(result).toEqual(expectedResult);
  });

  test("all elements filtered", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myFilter((el) => el > 0);
    const expectedResult = [1, 2, 3, 4, 5];
    expect(result).toEqual(expectedResult);
  });

  test("no element filtered", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myFilter((el) => el > 10);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });
});
