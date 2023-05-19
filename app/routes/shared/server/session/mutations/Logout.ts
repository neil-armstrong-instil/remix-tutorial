import {redirect} from "@remix-run/node";
import {getSession} from "~/routes/shared/server/session/queries/GetSession";
import {sessionStorage} from "~/routes/shared/server/session/store/SessionStore";

export async function logout(request: Request) {
  const session = await getSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
