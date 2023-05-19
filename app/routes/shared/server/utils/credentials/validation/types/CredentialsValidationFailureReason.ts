import type {TypedResponse} from "@remix-run/server-runtime/dist/responses";
import {json} from "@remix-run/node";
import {useActionData} from "@remix-run/react";

export interface CredentialsValidationFailureReason {
  errors: {
    email?: string;
    password?: string;
  };
}

export function credentialsValidationError(reason: CredentialsValidationFailureReason): TypedResponse<CredentialsValidationFailureReason> {
  return json(
    reason,
    {status: 400}
  );
}

export const useCredentialsValidationActionData = () => useActionData<CredentialsValidationFailureReason>();