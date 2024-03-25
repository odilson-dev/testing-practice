export default function caesarCipher(string, shift = 1) {
  let alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  let non_caps = Object.fromEntries(
    alphabet.map((letter, index) => [letter, alphabet[(index + shift) % 26]])
  );
  alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let caps = Object.fromEntries(
    alphabet.map((letter, index) => [letter, alphabet[(index + shift) % 26]])
  );
  let encrypter = Object.assign({}, non_caps, caps);
  return Array.from(string)
    .map((c) => encrypter[c] || c)
    .join("");
}
