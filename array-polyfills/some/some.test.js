require("./some");

describe("every method", () => {
  test("positive case", () => {
    const arr = [10, 21, 32, 43, 54, 65];
    const hasEven = arr.mySome((el) => el % 2 === 0);
    expect(hasEven).toEqual(true);
  });

  test("negative case", () => {
    const arr = [10, 22, 30, 42, 54, 66];
    const hasOdd = arr.mySome((el) => el % 2 !== 0);
    expect(hasOdd).toEqual(false);
  });
});
