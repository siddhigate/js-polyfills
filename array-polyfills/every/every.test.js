require("./every");

const arr1 = [10, 21, 32, 43, 54, 65];
const arr2 = [10, 22, 30, 42, 54, 66];

describe("every method", () => {
  test("positive case", () => {
    const isAllEven = arr1.every((el) => el % 2 === 0)
    expect(isAllEven).toEqual(false);
  });

  test("negative case", () => {
    const isAllEven = arr2.every((el) => el % 2 === 0)
    expect(isAllEven).toEqual(true);
  });
});
