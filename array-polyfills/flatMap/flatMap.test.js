require("./flatMap");

describe("flatMap method", () => {
  test("test case 1", () => {
    const arr = [10, 21, 30, 42, 50];
    const result = arr.myFlatMap((el) => (el % 10 === 0 ? [] : [el]));
    const expectedResult = [21, 42];
    expect(result).toEqual(expectedResult);
  });

  test("test case 2", () => {
    const arr = [10, [21], 30, 42, 50];
    const result = arr.myFlatMap((el) => el);
    const expectedResult = [10, 21, 30, 42, 50];
    expect(result).toEqual(expectedResult);
  });

  test("test case 3", () => {
    const arr = [10, [[21]], 30, 42, 50];
    const result = arr.myFlatMap((el) => el);
    const expectedResult = [10, [21], 30, 42, 50];
    expect(result).toEqual(expectedResult);
  });
});
