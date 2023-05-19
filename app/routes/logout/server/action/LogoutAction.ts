import type {ActionFunction} from "@remix-run/node";
import {logout} from "~/routes/shared/server/session/mutations/Logout";

export const logoutAction: ActionFunction = async ({request}) => {
  return logout(request);
}
