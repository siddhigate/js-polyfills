require("./keys");

describe("keys method", () => {
  test("keys test case", () => {
    const arr = ["a", "b", "c", "d", "e"];

    const keys = arr.myKeys();

    const result = [];
    for (let key of keys) {
      result.push(key);
    }

    const expectedResult = [0, 1, 2, 3, 4];

    expect(result).toEqual(expectedResult);
  });

  test("array containing undefined elements", () => {
    expect([...["a", undefined, "c"].myKeys()]).toEqual([0, 1, 2]);
  });

  test("array containing empty elements", () => {
    // keys does not skip empty elements
    expect([...["a", , "c"].myKeys()]).toEqual([0, 1, 2]);
  });
});
