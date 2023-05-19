import type {UnvalidatedCredentials} from "~/routes/shared/server/types/Credentials";
import {toStringOrUndefined} from "~/routes/shared/server/utils/ToStringOrUndefined";

export async function unpackCredentialsFromFormData(formData: FormData): Promise<UnvalidatedCredentials> {
  const email = toStringOrUndefined(formData.get("email"));
  const password = toStringOrUndefined(formData.get("password"));

  return {
    email,
    password
  }
}
