import { Injectable } from '@nestjs/common';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Encargado } from 'src/encargados/entities/encargado.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Padre } from 'src/padres/entities/padre.entity';
import { Hijo } from './entities/hijo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HijosService {

  constructor(
    @InjectRepository(Hijo) private hijoRepository: Repository<Hijo>,
    @InjectRepository(Padre) private padreRepository: Repository<Padre>,
    @InjectRepository(Escuela) private escuelaRepository: Repository<Escuela>,
    @InjectRepository(Encargado) private encargadoRepository: Repository<Encargado>
  ){}

  //Función para crear Hijo
  async create(createHijo: CreateHijoDto) {
    console.log(createHijo);
    const padre = await this.padreRepository.findOne({
      where: {id: createHijo.padreID}
    });
    console.log(padre);
    const hijo = this.hijoRepository.create({...createHijo, padre: padre
    });
    await this.hijoRepository.save(hijo);
    return hijo;
  }

  findAll() {
    return `This action returns all hijos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hijo`;
  }

  update(id: number, updateHijoDto: UpdateHijoDto) {
    return `This action updates a #${id} hijo`;
  }

  remove(id: number) {
    return `This action removes a #${id} hijo`;
  }
}
