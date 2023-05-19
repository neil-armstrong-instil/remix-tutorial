// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import {healthCheckLoader} from "~/routes/healthcheck/server/loader/HealthcheckLoader";

export const loader = healthCheckLoader;