import type {Note} from "@prisma/client";
import type {UserId} from "~/routes/shared/server/database/types/UserId";
import {prisma} from "~/routes/shared/server/database/Prisma";

type Request =
  & Pick<Note, "body" | "title">
  & UserId;

export function createNoteInDatabase(
  {
    body,
    title,
    userId
  }: Request
) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}