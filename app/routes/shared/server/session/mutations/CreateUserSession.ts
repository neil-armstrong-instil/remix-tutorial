import {redirect} from "@remix-run/node";
import {USER_SESSION_KEY} from "~/routes/shared/server/session/constants/UserSessionKey";
import {getSession} from "~/routes/shared/server/session/queries/GetSession";
import {sessionStorage} from "~/routes/shared/server/session/store/SessionStore";

interface Props {
  request: Request;
  userId: string;
  remember: boolean;
  redirectTo: string;
}

export async function createUserSession(
  {
    request,
    userId,
    remember,
    redirectTo
  }: Props
) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: calculateSessionAge(remember)
      })
    }
  });
}

function calculateSessionAge(shouldRememberSession: boolean): number | undefined {
  if (!shouldRememberSession) return undefined;

  return 60 * 60 * 24 * 7; // 7 days
}