import type {ActionFunction} from "@remix-run/node";
import {safeRedirectUrl} from "~/routes/shared/server/utils/SafeRedirectUrl";
import {createUserInDatabase} from "~/routes/shared/server/database/user/mutations/CreateUserInDatabase";
import {createUserSession} from "~/routes/shared/server/session/mutations/CreateUserSession";
import {unpackCredentialsFromFormData} from "~/routes/shared/server/utils/credentials/UnpackCredentialsFromFormData";
import {validateCredentials} from "~/routes/shared/server/utils/credentials/validation/ValidateCredentials";
import type {Credentials} from "~/routes/shared/server/types/Credentials";
import {getUserFromDatabaseByEmail} from "~/routes/shared/server/database/user/queries/GetUserFromDatabaseByEmail";
import {credentialsValidationError} from "~/routes/shared/server/utils/credentials/validation/types/CredentialsValidationFailureReason";

export const joinPageAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const unvalidatedCredentials = await unpackCredentialsFromFormData(formData);

  const errorResponse = await validateCredentials(unvalidatedCredentials);
  if (errorResponse) return errorResponse;
  const credentials = unvalidatedCredentials as Credentials;

  const existingUser = await getUserFromDatabaseByEmail(credentials.email);
  if (existingUser) {
    return credentialsValidationError({
      errors: {
        email: "A user already exists with this email"
      }
    });
  }

  const user = await createUserInDatabase(credentials);
  return createUserSession({
    userId: user.id,
    redirectTo: safeRedirectUrl(formData, "/"),
    remember: false,
    request
  });
};