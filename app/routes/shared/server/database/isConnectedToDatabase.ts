import {prisma} from "~/routes/shared/server/database/Prisma";

export async function isConnectedToDatabase(): Promise<boolean> {
  try {
    await prisma.user.count();
    return true;
  } catch (error) {
    return false;
  }
}