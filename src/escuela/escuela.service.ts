import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Like, Repository } from 'typeorm';

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
    const escuelas = this.escuelaRepository.find();
    return escuelas;
    }

    async findOne(id: number) {
      const escuela = await this.escuelaRepository.findOne({ where: { id: id } });
      if (!escuela) {
        throw new BadRequestException("Escuela no encontrada");
      }
      return escuela;
    }

  update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    this.escuelaRepository.delete(id);
    return "La escuela a siedo removida"
  }

  async search(nombre: string) {
    const escuelas = await this.escuelaRepository.find({
      where: { nombre: Like(`%${nombre}%`) },
    });
    return escuelas;
  }
  
  
}
