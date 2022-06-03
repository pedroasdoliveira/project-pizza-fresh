import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    nickname: 'pedrotaxp',
    name: 'Pedro',
    password: 'Abc@1347',
    image:
      'https://media-exp1.licdn.com/dms/image/D4D35AQFuvCwU0JCwPQ/profile-framedphoto-shrink_400_400/0/1650406705402?e=1653973200&v=beta&t=A3JBQDpblUQ9wP05p0HkdIMmVkmW93C1988Zrzr07zA',
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: {nickname: obj.nickname},
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      }
    })
  }
}
