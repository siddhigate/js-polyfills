require("./entries");

describe("entries method", () => {
  test("entries test case", () => {
    const arr = ["a", "b", "c", "d", "e"];

    const entries = arr.myEntries();

    const result = [];
    for (let entry of entries) {
      result.push(entry);
    }

    const expectedResult = [
      [0, "a"],
      [1, "b"],
      [2, "c"],
      [3, "d"],
      [4, "e"],
    ];

    expect(result).toEqual(expectedResult);
  });
});
