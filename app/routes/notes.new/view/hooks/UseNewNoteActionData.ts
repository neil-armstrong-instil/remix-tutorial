import {useActionData} from "@remix-run/react";
import type {NewNoteValidationError} from "~/routes/notes.new/server/action/validation/types/NewNoteValidationError";
import {useMemo} from "react";

interface ActionData {
  titleError?: string;
  bodyError?: string;
}

export const useNewNoteActionData = (): ActionData => {
  const actionData = useActionData<NewNoteValidationError>();

  const titleError = useMemo(() => actionData?.errors?.title, [actionData]);
  const bodyError = useMemo(() => actionData?.errors?.body, [actionData]);

  return {
    titleError,
    bodyError
  }
}