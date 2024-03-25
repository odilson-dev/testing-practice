import capitalize from "../src/capitalize";

it("Capitalizes the first character - Test 1", () => {
  expect(capitalize("monday")).toMatch(/^[A-Z]/);
});

it("Capitalizes the first character - Test 1", () => {
  expect(capitalize("monday")).toMatch("Monday");
});

it("Capitalizes the first character - Test 1", () => {
  expect(capitalize("tuesday")).toBe("Tuesday");
});
