import {redirect} from "@remix-run/node";
import {getUserIdFromSession} from "~/routes/shared/server/session/queries/user-id/GetUserIdFromSession";

// TODO: Mutation is bad, split this up!
export async function requireUserIdInSession(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const userId = await getUserIdFromSession(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }

  return userId;
}