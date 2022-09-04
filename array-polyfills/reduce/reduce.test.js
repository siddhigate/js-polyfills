require("./reduce");

describe("reduce method", () => {
  test("without passing initialValue", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myReduce((prev, curr) => prev + curr);
    const expectedResult = 15;
    expect(result).toBe(expectedResult);
  });

  test("with passing initialValue", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myReduce(
      (prev, curr) =>
        curr % 2 == 0
          ? { ...prev, even: prev.even + 1 }
          : { ...prev, odd: prev.odd + 1 },
      { even: 0, odd: 0 }
    );
    const expectedResult = {even: 2, odd: 3};
    expect(result).toEqual(expectedResult);
  });
});
