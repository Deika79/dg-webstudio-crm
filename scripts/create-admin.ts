import bcrypt from "bcryptjs";

import { prisma } from "../src/lib/prisma";

async function main() {
  const hashedPassword =
    await bcrypt.hash(
      "admin123",
      10
    );

  const existingUser =
    await prisma.user.findUnique({
      where: {
        email:
          "admin@dgwebstudio.com",
      },
    });

  if (existingUser) {
    console.log(
      "El usuario ya existe"
    );

    return;
  }

  const user =
    await prisma.user.create({
      data: {
        email:
          "admin@dgwebstudio.com",

        password:
          hashedPassword,

        name: "David",
      },
    });

  console.log(user);
}

main();