import type {AppData} from "@remix-run/server-runtime/dist/data";

export type LoaderResponse = Promise<Response | AppData>;