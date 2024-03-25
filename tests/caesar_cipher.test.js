import caesarCipher from "../src/caesar_cipher";

it("returns 'qtaj'", () => {
  const key = 5;
  expect(caesarCipher("love", key)).toBe("qtaj");
});
it("returns 'Pb Gdb'", () => {
  const key = 3;
  expect(caesarCipher("My Day", key)).toBe("Pb Gdb");
});
it("returns 'Voo!! Kpk fvb olhyk aoha'", () => {
  const key = 7;
  expect(caesarCipher("Ohh!! Did you heard that?", key)).toBe(
    "Voo!! Kpk fvb olhyk aoha?"
  );
});
it("returns 'Friday'", () => {
  const key = 26;
  expect(caesarCipher("Friday", key)).toBe("Friday");
});
