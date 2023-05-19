import {sessionStorage} from "~/routes/shared/server/session/store/SessionStore";

export async function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}
