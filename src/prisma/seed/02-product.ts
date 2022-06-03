import { Prisma, PrismaClient } from "@prisma/client";

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Pizza de Mussarela',
    description: 'Queijo mussarela fino do fino, massa fina e borda recheada',
    price: 12.34,
    image: 'https://img1.gratispng.com/20180624/tzi/kisspng-sicilian-pizza-salami-california-style-pizza-focac-sauce-pizza-wine-5b2f9b01cda4d7.2161941415298465298423.jpg',
  },
];

export const product = async (prisma: PrismaClient) => {
  for (const obj of Object.values(products)) {
    await prisma.product.upsert({
      where: {name: obj.name},
      update: {},
      create: {
        ...obj,
      }
    })
  }
}
