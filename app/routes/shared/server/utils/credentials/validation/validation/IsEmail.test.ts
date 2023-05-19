import * as target from "./IsEmail";

test("validateEmail returns false for non-emails", () => {
  expect(target.isEmail(undefined)).toBe(false);
  expect(target.isEmail(null)).toBe(false);
  expect(target.isEmail("")).toBe(false);
  expect(target.isEmail("not-an-email")).toBe(false);
  expect(target.isEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(target.isEmail("kody@example.com")).toBe(true);
});
