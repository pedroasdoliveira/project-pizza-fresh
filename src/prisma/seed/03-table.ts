import { Prisma, PrismaClient } from "@prisma/client";

export const Tables: Prisma.TableCreateInput[] = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  }
]

export const Table = async (prisma: PrismaClient) => {
  for (const obj of Object.values(Tables)) {
    await prisma.table.upsert({
      where: {number: obj.number},
      update: {},
      create: {
        ...obj
      }
    })
  }
}
