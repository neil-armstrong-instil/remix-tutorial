import type {Note} from "@prisma/client";
import type {UserId} from "~/routes/shared/server/database/types/UserId";
import {prisma} from "~/routes/shared/server/database/Prisma";

type Request =
  & Pick<Note, "id">
  & UserId;

export function deleteNoteFromDatabase(
  {
    id,
    userId
  }: Request
) {
  return prisma.note.deleteMany({
    where: {id, userId}
  });
}