import { Injectable } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';

@Injectable()
export class EncargadosService {
  create(createEncargadoDto: CreateEncargadoDto) {
    return 'This action adds a new encargado';
  }

  findAll() {
    return `This action returns all encargados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encargado`;
  }

  update(id: number, updateEncargadoDto: UpdateEncargadoDto) {
    return `This action updates a #${id} encargado`;
  }

  remove(id: number) {
    return `This action removes a #${id} encargado`;
  }
}
