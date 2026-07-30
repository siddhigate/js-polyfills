require("./reduceRight");

describe("reduceRight method", () => {
  test("without passing initialValue", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myReduceRight((prev, curr) => prev + " " + curr);
    const expectedResult = "5 4 3 2 1";
    expect(result).toBe(expectedResult);
  });

  test("with passing initialValue", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myReduceRight(
      (prev, curr) =>
        curr % 2 == 0
          ? { ...prev, even: prev.even + 1 }
          : { ...prev, odd: prev.odd + 1 },
      { even: 0, odd: 0 }
    );
    const expectedResult = { even: 2, odd: 3 };
    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    const fn = jest.fn((prev) => prev);
    const arr = ["a", undefined, "c"];

    arr.myReduceRight(fn, "seed");

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, "seed", "c", 2, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "seed", undefined, 1, arr);
    expect(fn).toHaveBeenNthCalledWith(3, "seed", "a", 0, arr);
  });

  test("array containing empty elements", () => {
    const fn = jest.fn((prev) => prev);
    const arr = ["a", , "c"];

    arr.myReduceRight(fn, "seed");

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "seed", "c", 2, arr);
    expect(fn).toHaveBeenNthCalledWith(2, "seed", "a", 0, arr);
  });

  test("empty elements are skipped when seeding without initialValue", () => {
    const arr = [1, 2, ,];
    expect(arr.myReduceRight((prev, curr) => prev + curr)).toBe(3);
  });

  test("all empty elements and no initialValue throws", () => {
    expect(() => [, ,].myReduceRight((prev, curr) => prev + curr)).toThrow(
      TypeError
    );
  });
});
