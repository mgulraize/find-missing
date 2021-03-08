const findMissing = require('./index');

describe("findMissing", () => {
  it("should return missing number 7", () => {
    // arrange
    const numbersArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const expectedResult = 7;

    // act
    const actualResult = findMissing(numbersArray);

    // assert
    expect(actualResult).toBe(expectedResult);
  });
  it("should return missing number 2", () => {
    // arrange
    const numbersArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedResult = 2;

    // act
    const actualResult = findMissing(numbersArray);

    // assert
    expect(actualResult).toBe(expectedResult);
  });
  it("should return missing number 1", () => {
    // arrange
    const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedResult = 1;

    // act
    const actualResult = findMissing(numbersArray);

    // assert
    expect(actualResult).toBe(expectedResult);
  });
});
