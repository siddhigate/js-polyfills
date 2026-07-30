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

  test("array containing undefined elements", () => {
    const arr = [30, undefined, 1, 22];
    const fn = jest.fn((a, b) => a - b);

    arr.mySort(fn);

    // undefined is sorted to the end and never reaches the comparator
    expect(arr).toStrictEqual([1, 22, 30, undefined]);
    expect(fn.mock.calls.flat()).not.toContain(undefined);
  });

  test("array containing empty elements", () => {
    const arr = [30, , 1, 22];
    const fn = jest.fn((a, b) => a - b);

    arr.mySort(fn);

    expect(arr).toStrictEqual([1, 22, 30, ,]);
    expect(3 in arr).toBe(false);
    expect(fn.mock.calls.flat()).not.toContain(undefined);
  });

  test("undefined elements are sorted before empty elements", () => {
    const arr = [3, , 1, undefined, 2];

    arr.mySort();

    expect(arr).toHaveLength(5);
    expect(arr.slice(0, 3)).toEqual([1, 2, 3]);
    expect(arr[3]).toBeUndefined();
    expect(3 in arr).toBe(true);
    expect(4 in arr).toBe(false);
  });
});
