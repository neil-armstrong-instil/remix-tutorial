import type {UserId} from "~/routes/shared/server/database/types/UserId";
import {prisma} from "~/routes/shared/server/database/Prisma";

type Request = UserId;

export function getNotesFromDatabase(
  {
    userId
  }: Request
) {
  return prisma.note.findMany({
    where: {userId},
    select: {id: true, title: true},
    orderBy: {updatedAt: "desc"}
  });
}