import {prisma} from "~/routes/shared/server/database/Prisma";
import type {User} from "@prisma/client";

export async function getUserFromDatabaseByEmail(email: User["email"]) {
  return prisma.user.findUnique({
    where: {email}
  });
}