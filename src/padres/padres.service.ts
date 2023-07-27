import { Injectable } from '@nestjs/common';
import { CreatePadreDto } from './dto/create-padre.dto';
import { UpdatePadreDto } from './dto/update-padre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Padre } from './entities/padre.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PadresService {

  constructor(
    private jwtS:JwtService,
    @InjectRepository(Padre) private padreRepository: Repository<Padre>
  ){}

  //Funcion de crear padre

  async create(createPadre: CreatePadreDto) {
    try {
      const {password,...useData} = createPadre;
      const padre = this.padreRepository.create({
        ...useData, password: bcrypt.hashSync(password, 10)
      });
      await this.padreRepository.save(padre);
      delete padre.password;
      return {...padre}
    }
    catch([error]){
      return error;
    }
  }


  //

  findAll() {
    return `This action returns all padres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} padre`;
  }

  update(id: number, updatePadreDto: UpdatePadreDto) {
    return `This action updates a #${id} padre`;
  }

  remove(id: number) {
    return `This action removes a #${id} padre`;
  }
}
