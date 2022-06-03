import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: string, createOrderDto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      user: {
        connect: {
          id: userId,
        },
      },
      table: {
        connect: {
          number: createOrderDto.tableNumber,
        },
      },
      products: {
        createMany: {
          data: createOrderDto.products.map((CreateOrderProductDto) => ({
            productId: CreateOrderProductDto.productId,
            quantity: CreateOrderProductDto.quantity,
            description: CreateOrderProductDto.description,
          })),
        },
      },
    };
    return this.prisma.order
      .create({
        data,
        select: {
          id: true,
          table: {
            select: {
              number: true,
            },
          },
          user: {
            select: {
              name: true,
            },
          },
          products: {
            select: {
              quantity: true,
              description: true,
              product: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .catch(this.handleError);
  }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            products: true,
          }
        }
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: {id},
      include: {
        user: {
          select: {
            name: true,
          },
        },
        table: {
          select: {
            number: true,
          },
        },
        products: {
          select: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
              }
            }
          }
        }
      }
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if (!lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}