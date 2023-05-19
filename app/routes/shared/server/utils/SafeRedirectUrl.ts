import {DEFAULT_REDIRECT} from "~/routes/shared/server/constants/DefaultRedirect";

export function safeRedirectUrl(formData: FormData, defaultRedirect = DEFAULT_REDIRECT): string {
  const to = formData.get("redirectTo");

  if (!to || typeof to !== "string") return defaultRedirect;
  if (!to.startsWith("/") || to.startsWith("//")) return defaultRedirect;
  return to;
}