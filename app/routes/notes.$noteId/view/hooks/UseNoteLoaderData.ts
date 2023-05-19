import {useLoaderData} from "@remix-run/react";
import type {notePageLoader, NotePageLoaderResponse} from "~/routes/notes.$noteId/server/loader/NotePageLoader";

type LoaderData = NotePageLoaderResponse["note"];

export function useNoteLoaderData(): LoaderData {
  const loaderData = useLoaderData<typeof notePageLoader>();

  return loaderData.note;
}