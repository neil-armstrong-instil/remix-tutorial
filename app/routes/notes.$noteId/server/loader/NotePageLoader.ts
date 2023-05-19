import type {LoaderFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {requireUserIdInSession} from "~/routes/shared/server/session/queries/user-id/RequireUserIdInSession";
import invariant from "tiny-invariant";
import {getNoteFromDatabase} from "~/routes/shared/server/database/note/queries/GetNoteFromDatabase";

export interface NotePageLoaderResponse {
  note: NonNullable<Awaited<ReturnType<typeof getNoteFromDatabase>>>
}

export const notePageLoader: LoaderFunction = async ({params, request}) => {
  invariant(params.noteId, "noteId not found");

  const userId = await requireUserIdInSession(request);
  const note = await getNoteFromDatabase({id: params.noteId, userId});
  if (!note) {
    throw new Response(
      "Not Found",
      {status: 404}
    );
  }

  const response: NotePageLoaderResponse = {
    note
  };
  return json(response);
};