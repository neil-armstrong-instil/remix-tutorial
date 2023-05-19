import type {ActionFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {safeRedirectUrl} from "~/routes/shared/server/utils/SafeRedirectUrl";
import {createUserSession} from "~/routes/shared/server/session/mutations/CreateUserSession";
import {unpackCredentialsFromFormData} from "~/routes/shared/server/utils/credentials/UnpackCredentialsFromFormData";
import {validateCredentials} from "~/routes/shared/server/utils/credentials/validation/ValidateCredentials";
import type {Credentials} from "~/routes/shared/server/types/Credentials";
import {verifyLogin} from "~/routes/shared/server/database/user/queries/VerifyUserInDatabase";

export const loginPageAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const unvalidatedCredentials = await unpackCredentialsFromFormData(formData);

  const errorResponse = await validateCredentials(unvalidatedCredentials);
  if (errorResponse) return errorResponse;
  const credentials = unvalidatedCredentials as Credentials;

  const user = await verifyLogin(credentials.email, credentials.password);
  if (!user) {
    return json(
      {errors: {email: "Invalid email or password", password: null}},
      {status: 400}
    );
  }

  const remember = formData.get("remember") === "on";
  return createUserSession({
    userId: user.id,
    redirectTo: safeRedirectUrl(formData),
    remember,
    request
  });
};