import type {Password, User} from "@prisma/client";
import {prisma} from "~/routes/shared/server/database/Prisma";
import bcrypt from "bcryptjs";

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: {email},
    include: {
      password: true
    }
  });
  if (!userWithPassword || !userWithPassword.password) return undefined;

  const isValidPassword = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );
  if (!isValidPassword) return undefined;

  const {password: _password, ...userWithoutPassword} = userWithPassword;
  return userWithoutPassword;
}
