import {Form} from "@remix-run/react";
import {useEffect, useRef} from "react";
import {useNewNoteActionData} from "~/routes/notes.new/view/hooks/UseNewNoteActionData";

export function NewNotePage() {
  const {titleError, bodyError} = useNewNoteActionData();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleError) {
      titleRef.current?.focus();
      return;
    }

    if (bodyError) {
      bodyRef.current?.focus();
      return;
    }
  }, [titleError, bodyError]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Title: </span>

          <input
            ref={titleRef}
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            name="title"
            aria-invalid={titleError ? true : undefined}
            aria-errormessage={titleError ? "title-error" : undefined}
          />
        </label>

        {titleError && (
          <div
            id="title-error"
            className="pt-1 text-red-700"
          >
            {titleError}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Body: </span>

          <textarea
            ref={bodyRef}
            className="w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6"
            name="body"
            rows={8}
            aria-invalid={bodyError ? true : undefined}
            aria-errormessage={bodyError ? "body-error" : undefined}
          />
        </label>

        {bodyError && (
          <div
            id="body-error"
            className="pt-1 text-red-700"
          >
            {bodyError}
          </div>
        )}
      </div>

      <div className="text-right">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
