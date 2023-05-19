import type {ActionFunction} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import {requireUserIdInSession} from "~/routes/shared/server/session/queries/user-id/RequireUserIdInSession";
import {createNoteInDatabase} from "~/routes/shared/server/database/note/mutations/CreateNoteInDatabase";
import {validateTitle} from "~/routes/notes.new/server/action/validation/ValidateTitle";
import {validateBody} from "~/routes/notes.new/server/action/validation/ValidateBody";
import {unpackFormData} from "~/routes/notes.new/server/action/utils/UnpackFormData";

export const newNotePageAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const {unvalidatedTitle, unvalidatedBody} = unpackFormData(formData);

  const titleValidationError = validateTitle(unvalidatedTitle);
  if (titleValidationError) return titleValidationError;
  const title = unvalidatedTitle as string;

  const bodyValidationError = validateBody(unvalidatedTitle);
  if (bodyValidationError) return bodyValidationError;
  const body = unvalidatedBody as string;

  const note = await createNoteInDatabase({
    userId: await requireUserIdInSession(request),
    title,
    body
  });
  return redirect(`/notes/${note.id}`);
};
