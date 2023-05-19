import type {NewNoteValidationError} from "~/routes/notes.new/server/action/validation/types/NewNoteValidationError";
import {json} from "@remix-run/node";
import type {TypedResponse} from "@remix-run/server-runtime/dist/responses";

export function validateBody(maybeBody: string | undefined): TypedResponse<NewNoteValidationError> | undefined {
  if (maybeBody === undefined || maybeBody.length > 0) return undefined;

  return json<NewNoteValidationError>(
    {
      errors: {
        body: "Body is required"
      }
    },
    {status: 400}
  );
}