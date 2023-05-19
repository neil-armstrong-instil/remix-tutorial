import {useOptionalUser} from "~/routes/shared/view/hooks/use-user/hooks/UseOptionalUser";
import type {User} from "@prisma/client";

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");

  return maybeUser;
}