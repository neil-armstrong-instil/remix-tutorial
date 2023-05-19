import type {LoaderFunction} from "@remix-run/node";
import {redirect} from "~/routes/shared/server/utils/Redirect";

export const logoutLoader: LoaderFunction = async () => {
  return redirect();
}
