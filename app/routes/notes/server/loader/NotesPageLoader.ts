import type { LoaderFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {requireUserIdInSession} from "~/routes/shared/server/session/queries/user-id/RequireUserIdInSession";
import {getNotesFromDatabase} from "~/routes/shared/server/database/note/queries/GetNotesFromDatabase";
import {useLoaderData} from "@remix-run/react";

interface NotesPageLoaderData {
  notes: Awaited<ReturnType<typeof getNotesFromDatabase>>;
}

export const notesPageLoader: LoaderFunction = async ({request}) => {
  const userId = await requireUserIdInSession(request);
  const notes = await getNotesFromDatabase({userId});

  const loaderData: NotesPageLoaderData = {
    notes
  };
  return json(loaderData);
};

export function useNotesPageLoaderData(): NotesPageLoaderData {
  return useLoaderData<typeof notesPageLoader>() as NotesPageLoaderData;
}