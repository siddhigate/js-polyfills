require("./at.js");

const arr = ["a", "b", "c", "d", "e"];

describe("at method", () => {
  test("positive param", () => {
    expect(arr.myAt(3)).toBe("d");
  });

  test("positive out of range param", () => {
    expect(arr.myAt(5)).toBeUndefined();
  });

  test("negative param", () => {
    expect(arr.myAt(-1)).toBe("e");
  });

  test("last possible negative param", () => {
    expect(arr.myAt(-5)).toBe("a");
  });

  test("out of range negative param", () => {
    expect(arr.myAt(-6)).toBeUndefined();
  });
});
