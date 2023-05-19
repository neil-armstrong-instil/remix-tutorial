export function isEmail(maybeEmail: string | undefined): maybeEmail is string {
  return maybeEmail !== undefined
    && maybeEmail.length > 3
    && maybeEmail.includes("@");
}
