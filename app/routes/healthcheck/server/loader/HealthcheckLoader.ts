import type {LoaderFunction} from "@remix-run/node";
import {isConnectedToDatabase} from "~/routes/shared/server/database/isConnectedToDatabase";
import {isConnectedToServer} from "~/routes/shared/server/IsConnectedToServer";

export const healthCheckLoader: LoaderFunction = async ({request}) => {
  try {
    await Promise.all([
      isConnectedToDatabase(),
      isConnectedToServer(request)
    ]);

    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", {error});
    return new Response("ERROR", {status: 500});
  }
};