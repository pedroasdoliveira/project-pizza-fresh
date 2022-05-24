import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    nickname: true,
    name: true,
    password: false,
    image: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect
    });
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: {id},
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException("Registro com o Id '${id}' não encontrado.");
    }
    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async create(Dto: CreateUserDto): Promise<User> {
    if (Dto.password != Dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete Dto.confirmPassword;

    const data: User = {
      ...Dto,
      password: await bcrypt.hash(Dto.password, 10),
     }

    return this.prisma.user.create({data, select: this.userSelect}).catch(this.handleError);
  }

  async update(id: string, Dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if (Dto.password) {
      if (Dto.password != Dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais.');
      }
    }

    delete Dto.confirmPassword;

    const data: Partial<User> = {...Dto};

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10)
    }

    return this.prisma.user.update({
      where: {id},
      data,
      select: this.userSelect,
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

    if (!lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
