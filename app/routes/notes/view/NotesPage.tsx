import {Form, Link, NavLink, Outlet} from "@remix-run/react";
import {useUser} from "~/routes/shared/view/hooks/use-user/UseUser";
import {useNotesPageLoaderData} from "~/routes/notes/server/loader/NotesPageLoader";

export function NotesPage() {
  const {notes} = useNotesPageLoaderData();
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Notes</Link>
        </h1>

        <p>{user.email}</p>

        <Form
          action="/logout"
          method="post"
        >
          <button
            className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            type="submit"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link
            className="block p-4 text-xl text-blue-500"
            to="/notes/new"
          >
            + New Note
          </Link>

          <hr/>

          {notes.length === 0 && (
            <p className="p-4">No notes yet</p>
          )}

          {notes.length > 0 && (
            <ol>
              {notes.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({isActive}) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={`./${note.id}`}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          {/* Child routes be injected here */}
          <Outlet/>
        </div>
      </main>
    </div>
  );
}
