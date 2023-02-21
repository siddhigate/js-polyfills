require("./forEach");

describe("forEach method", () => {
  test("test case 1", () => {
    const arr = [10, 21, 30, 42, 50];
    const result = {};
    arr.myForEach((element, index) => (result[index] = element));
    // console.log(result);
    const expectedResult = { 0: 10, 1: 21, 2: 30, 3: 42, 4: 50 };
    expect(result).toEqual(expectedResult);
  });

  test("test case 2", () => {
    const arr = [1, 2, 3, undefined, undefined, 6];
    const result = {};
    arr.myForEach((element, index) => (result[index] = element));
    // console.log(result);
    const expectedResult = { 0: 1, 1: 2, 2:3 , 3: undefined , 4: undefined, 5: 6};
    expect(result).toEqual(expectedResult);
  });

  test("test case 3", () => {
    const arr = ["a", "b", "c", , 0, "d"];
    const result = {};
    arr.myForEach((element, index) => (result[index] = element));
    // console.log(result);
    const expectedResult = { 0: "a", 1: "b", 2: "c", 4: 0, 5: "d" };
    expect(result).toEqual(expectedResult);
  });
});
