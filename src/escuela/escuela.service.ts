import { Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EscuelaService {

constructor(
  @InjectRepository(Escuela) private escuelaRepository: Repository <Escuela>
){}

async create(createEscuela: CreateEscuelaDto) {
  const escuela = await this.escuelaRepository.create(createEscuela);
  return this.escuelaRepository.save(escuela);
}



  findAll() {
    return `This action returns all escuela`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escuela`;
  }

  update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
