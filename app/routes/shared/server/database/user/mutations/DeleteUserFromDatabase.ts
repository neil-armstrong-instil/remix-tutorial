import {prisma} from "~/routes/shared/server/database/Prisma";
import type {User} from "@prisma/client";

export async function deleteUserFromDatabase(email: User["email"]) {
  return prisma.user.delete({
    where: {email}
  });
}