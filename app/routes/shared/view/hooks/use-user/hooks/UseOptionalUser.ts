import {useMatches} from "@remix-run/react";
import {useMemo} from "react";
import type {User} from "@prisma/client";

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) return undefined;

  return data.user;
}

function useMatchesData(id: string): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(() => {
    return matchingRoutes.find((route) => route.id === id);
  }, [matchingRoutes, id]);

  return route?.data;
}

function isUser(user: any): user is User {
  return user
    && typeof user === "object"
    && typeof user.email === "string";
}