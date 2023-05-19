export function toStringOrUndefined(input: FormDataEntryValue | null): string | undefined {
  if (typeof input !== "string") return undefined;

  return input;
}