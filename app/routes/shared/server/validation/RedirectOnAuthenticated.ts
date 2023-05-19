import {getUserIdFromSession} from "~/routes/shared/server/session/queries/user-id/GetUserIdFromSession";
import {json, redirect} from "@remix-run/node";
import type {LoaderResponse} from "~/routes/shared/server/types/LoaderResponse";
import {DEFAULT_REDIRECT} from "~/routes/shared/server/constants/DefaultRedirect";

export async function redirectOnAuthenticated(request: Request, redirectUrl = DEFAULT_REDIRECT): LoaderResponse {
  const userId = await getUserIdFromSession(request);
  if (!userId) return json({});

  return redirect(redirectUrl);
}