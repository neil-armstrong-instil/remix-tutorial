import {useMemo} from "react";
import {useCredentialsValidationActionData} from "~/routes/shared/server/utils/credentials/validation/types/CredentialsValidationFailureReason";

interface CredentialsValidationError {
  emailError?: string;
  passwordError?: string;
}

export function useCredentialsValidationError(): CredentialsValidationError {
  const actionData = useCredentialsValidationActionData();
  const emailError = useMemo(() => actionData?.errors?.email, [actionData]);
  const passwordError = useMemo(() => actionData?.errors?.password, [actionData]);

  return {
    emailError,
    passwordError
  }
}