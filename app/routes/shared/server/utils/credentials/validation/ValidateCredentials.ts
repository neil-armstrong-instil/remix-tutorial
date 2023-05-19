import type {UnvalidatedCredentials} from "~/routes/shared/server/types/Credentials";
import {isEmail} from "~/routes/shared/server/utils/credentials/validation/validation/IsEmail";
import {isPassword} from "~/routes/shared/server/utils/credentials/validation/validation/IsPassword";
import {isValidPasswordLength} from "~/routes/shared/server/utils/credentials/validation/validation/IsValidPasswordLength";
import type {TypedResponse} from "@remix-run/server-runtime/dist/responses";
import type {CredentialsValidationFailureReason} from "~/routes/shared/server/utils/credentials/validation/types/CredentialsValidationFailureReason";
import {credentialsValidationError} from "~/routes/shared/server/utils/credentials/validation/types/CredentialsValidationFailureReason";

export async function validateCredentials({email, password}: UnvalidatedCredentials): Promise<TypedResponse<CredentialsValidationFailureReason> | undefined> {
  if (!isEmail(email)) {
    return credentialsValidationError({
      errors: {
        email: "Email is invalid"
      }
    });
  }

  if (!isPassword(password)) {
    return credentialsValidationError({
      errors: {
        password: "Password is required"
      }
    });
  }

  if (isValidPasswordLength(password)) {
    return credentialsValidationError({
      errors: {
        password: "Password is too short"
      }
    });
  }

  return undefined;
}
