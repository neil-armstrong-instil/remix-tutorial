import type {User} from "@prisma/client";
import {USER_SESSION_KEY} from "~/routes/shared/server/session/constants/UserSessionKey";
import {getSession} from "~/routes/shared/server/session/queries/GetSession";

export async function getUserIdFromSession(
  request: Request
): Promise<User["id"] | undefined> {
  const session = await getSession(request);
  return session.get(USER_SESSION_KEY);
}