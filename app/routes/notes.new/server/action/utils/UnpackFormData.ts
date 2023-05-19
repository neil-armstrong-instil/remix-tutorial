import {toStringOrUndefined} from "~/routes/shared/server/utils/ToStringOrUndefined";

interface Response {
  unvalidatedTitle: string | undefined;
  unvalidatedBody: string | undefined;
}

export function unpackFormData(formData: FormData): Response {
  return {
    unvalidatedTitle: toStringOrUndefined(formData.get("title")),
    unvalidatedBody: toStringOrUndefined(formData.get("body"))
  }
}