import type {LoaderFunction} from "@remix-run/node";
import {redirectOnAuthenticated} from "~/routes/shared/server/validation/RedirectOnAuthenticated";

export const loginPageLoader: LoaderFunction = async ({request}) => {
  return redirectOnAuthenticated(request);
};