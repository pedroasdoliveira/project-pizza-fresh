import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({where: {id}});

    if (!record) {
      throw new NotFoundException("Registro com o Id '${id}' não encontrado.");
    }
    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const data: User = { ...createUserDto }

    return this.prisma.user.create({data}).catch(this.handleError);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    const data: Partial<User> = {...updateUserDto};

    return this.prisma.user.update({
      where: {id},
      data
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.user.delete({
      where:{id},
    }).catch(this.handleError)
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
