import {isRouteErrorResponse, useRouteError} from "@remix-run/react";

export function NotePageError() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div>An unexpected error occurred: {error.message}</div>
    );
  }

  if (!isRouteErrorResponse(error)) {
    return (
      <h1>Unknown Error</h1>
    );
  }

  if (error.status === 404) {
    return (
      <div>Note not found</div>
    );
  }

  return (
    <div>An unexpected error occurred: {error.statusText}</div>
  );
}
