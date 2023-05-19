import {Form} from "@remix-run/react";
import {useNoteLoaderData} from "~/routes/notes.$noteId/view/hooks/UseNoteLoaderData";

export function NotePage() {
  const data = useNoteLoaderData();

  return (
    <div>
      <h3 className="text-2xl font-bold">
        {data.title}
      </h3>

      <p className="py-6">
        {data.body}
      </p>

      <hr className="my-4"/>

      <Form method="post">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          type="submit"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}
