import {getUserFromDatabaseById} from "~/routes/shared/server/database/user/queries/GetUserFromDatabaseById";
import {getUserIdFromSession} from "~/routes/shared/server/session/queries/user-id/GetUserIdFromSession";
import {logout} from "~/routes/shared/server/session/mutations/Logout";

export async function getUserFromSession(request: Request) {
  const userId = await getUserIdFromSession(request);
  if (userId === undefined) return undefined;

  const user = await getUserFromDatabaseById(userId);
  if (!user) throw await logout(request);

  return user;
}