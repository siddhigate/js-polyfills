require("./sort");

describe("sort method", () => {
  test("default sort method without parameter", () => {
    const arr = [30, 55, 1, 3, 66, 22];
    arr.mySort();
    const expectedResult = [1, 22, 3, 30, 55, 66];
    expect(arr).toEqual(expectedResult);
  });

  test("sort method with comparator parameter", () => {
    const arr = [30, 55, 1, 3, 66, 22];
    arr.mySort((a, b) => a - b);
    const expectedResult = [1, 3, 22, 30, 55, 66];
    expect(arr).toEqual(expectedResult);
  });
});
