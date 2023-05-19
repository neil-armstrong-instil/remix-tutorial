import {getUserFromDatabaseById} from "~/routes/shared/server/database/user/queries/GetUserFromDatabaseById";
import {requireUserIdInSession} from "~/routes/shared/server/session/queries/user-id/RequireUserIdInSession";
import {logout} from "~/routes/shared/server/session/mutations/Logout";

export async function requireUserInSession(request: Request) {
  const userId = await requireUserIdInSession(request);

  const user = await getUserFromDatabaseById(userId);
  if (user) return user;

  throw await logout(request);
}