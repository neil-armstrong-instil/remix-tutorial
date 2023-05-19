export function isPassword(maybePassword: string | undefined): maybePassword is string {
  return maybePassword !== undefined
    && maybePassword.length > 0;
}