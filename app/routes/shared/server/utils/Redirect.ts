import {redirect as remixRedirect} from "@remix-run/server-runtime";
import {DEFAULT_REDIRECT} from "~/routes/shared/server/constants/DefaultRedirect";
import type {RedirectFunction} from "@remix-run/server-runtime";

export const redirect = (url = DEFAULT_REDIRECT): ReturnType<RedirectFunction> => remixRedirect(url);