import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EncargadosService {
  
  
  
  async create(createEncargado: CreateEncargadoDto) {
    const encargado=this.encargadoRepository.create(createEncargado);
    await this.encargadoRepository.save(encargado);
    return encargado
  }

  findAll() {
    const encargados= this.encargadoRepository.find()
    return encargados
  }

  async findOne(id: number) {
    const encargado= await this.encargadoRepository.findOne({
      where:{id}
    })
    if(!encargado){
      throw new BadRequestException("Encargado no encontrado");
    }
    return encargado
  }

  async update(id: number, updateEncargado: UpdateEncargadoDto) {
    await this.encargadoRepository.update(id, updateEncargado);
    const encargado= await this.encargadoRepository.findOne({where:{id}});
    if(!encargado){
      throw new BadRequestException("Encargado no encontrado");
    }
    return encargado
  }

  remove(id: number) {
    this.encargadoRepository.delete(id);
  }

  constructor(
    @InjectRepository(Encargado) private encargadoRepository: Repository<Encargado>,){}
}
