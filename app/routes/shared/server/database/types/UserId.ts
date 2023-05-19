import type {User as DatabaseUser} from "@prisma/client";

export interface UserId {
  userId: DatabaseUser["id"]
}
