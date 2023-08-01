import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Padre } from 'src/padres/entities/padre.entity';
import { Hijo } from './entities/hijo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HijosService {

  constructor(
    @InjectRepository(Padre) private padreRepository: Repository<Padre>,
    @InjectRepository(Hijo) private hijoRepository: Repository<Hijo>
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

  //Funcion para encontrar todos los alumnos
  findAll() {
   const hijos = this.hijoRepository.find();
   return hijos;
  }

  //Funcion para encontrar alumno por ID
  async findOne(id: number) {
    const hijo = await this.hijoRepository.findOne({
      where:{id}
    })
    if(!hijo){
      throw new BadRequestException("Alumnoo no encontrado");
    }
    return hijo;
  }

  //Funcion para actualizar hijo/alumno
  async update(id: number, updateHijo: UpdateHijoDto) {
    await this.hijoRepository.update(id, updateHijo);
    const hijo = await this.hijoRepository.findOne({where:{id}});
    if(!hijo){
      throw new BadRequestException("Alumno no encontrado");
    }
    return hijo
  }


  //Funcion para eliminar alumnos por ID
  remove(id: number) {
    this.hijoRepository.delete(id);
  }
}
