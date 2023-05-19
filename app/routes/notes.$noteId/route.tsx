import {NotePage} from "~/routes/notes.$noteId/view/NotePage";
import {NotePageError} from "~/routes/notes.$noteId/view/error/NotePageError";
import {notePageAction} from "~/routes/notes.$noteId/server/action/NotePageAction";
import {notePageLoader} from "~/routes/notes.$noteId/server/loader/NotePageLoader";

export const loader = notePageLoader;
export const action = notePageAction;

export const ErrorBoundary = NotePageError;
export default NotePage;
