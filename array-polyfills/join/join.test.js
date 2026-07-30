require("./join");

describe("filter method", () => {
  test("join without parameter", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myJoin();
    const expectedResult = "1,2,3,4,5";
    expect(result).toBe(expectedResult);
  });

  test("join with parameter 1", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myJoin("*");
    const expectedResult = "1*2*3*4*5";
    expect(result).toBe(expectedResult);
  });

  test("join with parameter 2", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myJoin(" ");
    const expectedResult = "1 2 3 4 5";
    expect(result).toBe(expectedResult);
  });

  test("array containing undefined and null elements", () => {
    expect(["a", undefined, "c"].myJoin()).toBe("a,,c");
    expect(["a", null, "c"].myJoin()).toBe("a,,c");
  });

  test("array containing empty elements", () => {
    const arr = ["a", , "c"];
    expect(arr.myJoin()).toBe("a,,c");
    expect(arr.myJoin("*")).toBe("a**c");
  });
});
