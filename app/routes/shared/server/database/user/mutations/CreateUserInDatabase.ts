import bcrypt from "bcryptjs";
import {prisma} from "~/routes/shared/server/database/Prisma";
import type {Credentials} from "~/routes/shared/server/types/Credentials";

export async function createUserInDatabase({email, password}: Credentials) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}