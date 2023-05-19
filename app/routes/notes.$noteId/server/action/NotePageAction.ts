import type {ActionFunction} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import {requireUserIdInSession} from "~/routes/shared/server/session/queries/user-id/RequireUserIdInSession";
import invariant from "tiny-invariant";
import {deleteNoteFromDatabase} from "~/routes/shared/server/database/note/mutations/DeleteNoteFromDatabase";

export const notePageAction: ActionFunction = async ({params, request}) => {
  invariant(params.noteId, "noteId not found");

  const userId = await requireUserIdInSession(request);
  await deleteNoteFromDatabase({id: params.noteId, userId});

  return redirect("/notes");
};