import analyzeArray from "../src/analyze_array";

it("returns { average: 5, min: 5, max: 5, length: 3 }", () => {
  const myArray = [5, 5, 5];
  expect(analyzeArray(myArray)).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 3,
  });
});

it("returns { average: 4, min: 1, max: 9, length: 5 }", () => {
  const myArray = [1, 5, 3, 9, 2];
  expect(analyzeArray(myArray)).toEqual({
    average: 4,
    min: 1,
    max: 9,
    length: 5,
  });
});
