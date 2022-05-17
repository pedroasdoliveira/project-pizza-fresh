import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entities';

@Injectable({})
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany();
  }

  create(dto: CreateTableDto) {
    const table: Table = { ...dto };

    return this.prisma.table.create({
      data: table,
    });
  }
}
