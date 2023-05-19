export function isValidPasswordLength(password: string): boolean {
  return password.length < 8;
}