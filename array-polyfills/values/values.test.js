require("./values");

describe("values method", () => {
  test("values test case", () => {
    const arr = ["a", "b", "c", "d", "e"];

    const values = arr.myValues();

    const result = [];
    for (let value of values) {
      result.push(value);
    }

    const expectedResult = ["a", "b", "c", "d", "e"];

    expect(result).toEqual(expectedResult);
  });
});
