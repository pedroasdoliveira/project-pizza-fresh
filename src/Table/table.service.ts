import { Injectable } from '@nestjs/common';

@Injectable({})
export class TableService {
  create() {
    return 'Criar mesa';
  }
  findAll() {
    return 'Buscar todas as mesas';
  }
}
