import {prisma} from "~/routes/shared/server/database/Prisma";
import type {User} from "@prisma/client";

export async function getUserFromDatabaseById(id: User["id"]) {
  return prisma.user.findUnique({
    where: {id}
  });
}