import type {Note} from "@prisma/client";
import type {UserId} from "~/routes/shared/server/database/types/UserId";
import {prisma} from "~/routes/shared/server/database/Prisma";

type Request =
  & Pick<Note, "id">
  & UserId

export function getNoteFromDatabase(
  {
    id,
    userId
  }: Request
) {
  return prisma.note.findFirst({
    select: {id: true, body: true, title: true},
    where: {id, userId}
  });
}