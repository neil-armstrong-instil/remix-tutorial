import type {NewNoteValidationError} from "~/routes/notes.new/server/action/validation/types/NewNoteValidationError";
import {json} from "@remix-run/node";
import type {TypedResponse} from "@remix-run/server-runtime/dist/responses";

export function validateTitle(maybeTitle: string | undefined): TypedResponse<NewNoteValidationError> | undefined {
  if (maybeTitle === undefined || maybeTitle.length > 0) return undefined;

  return json<NewNoteValidationError>(
    {
      errors: {
        title: "Title is required"
      }
    },
    {status: 400}
  );
}