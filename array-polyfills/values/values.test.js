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

  test("array containing undefined elements", () => {
    const result = [...["a", undefined, "c"].myValues()];
    expect(result).toStrictEqual(["a", undefined, "c"]);
  });

  test("array containing empty elements", () => {
    // values yields empty elements as undefined
    const result = [...["a", , "c"].myValues()];
    expect(result).toStrictEqual(["a", undefined, "c"]);
  });
});
