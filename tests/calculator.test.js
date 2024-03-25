import calculator from "../src/calculator";

it("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

it("Subtract 6 from 10", () => {
  expect(calculator.subtract(6, 10)).toEqual(4);
});

it("multiply 3 by 5", () => {
  expect(calculator.multiply(3, 5)).toEqual(15);
});

it("divide 80 by 10", () => {
  expect(calculator.divide(80, 10)).toEqual(8);
});
