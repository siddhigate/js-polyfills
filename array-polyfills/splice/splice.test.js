require("./splice");

describe("splice method", () => {
  test("no parameter", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySplice();
    const expectedResult = [];
    const expectedArray = ["a", "b", "c", "d", "e"];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedArray);
  });

  test("one parameter -> all elements after the first parameter will be deleted", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySplice(4);
    const expectedResult = ["e"];
    const expectedArray = ["a", "b", "c", "d"];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedArray);
  });

  test("two parameters -> first param: start index, second param: delete count", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySplice(1, 2);
    const expectedResult = ["b", "c"];
    const expectedArray = ["a", "d", "e"];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedArray);
  });

  test("one number and one character", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySplice(1, "z");
    const expectedResult = [];
    const expectedArray = ["a", "b", "c", "d", "e"];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedArray);
  });

  test("start, deleteCount = 0, and item parameter -> add item at start index", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySplice(1, 0, "Z");
    const expectedResult = [];
    const expectedArray = ["a", "Z", "b", "c", "d", "e"];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedArray);
  });

  test("start, deleteCount = 1 and items -> deletes and adds new items", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySplice(1, 1, "Z", "Y");
    const expectedResult = ["b"];
    const expectedArray = ["a", "Z", "Y", "c", "d", "e"];
    expect(result).toEqual(expectedResult);
    expect(arr).toEqual(expectedArray);
  });
});
