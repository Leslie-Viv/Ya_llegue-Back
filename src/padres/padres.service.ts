import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreatePadreDto } from './dto/create-padre.dto';
import { UpdatePadreDto } from './dto/update-padre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Padre } from './entities/padre.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginPadreDTO } from './dto/login-padre.dto';

@Injectable()
export class PadresService {

  constructor(
    private jwtS:JwtService,
    @InjectRepository(Padre) private padreRepository: Repository<Padre>
  ){}

  //Funcion de crear padre




  //Funcion para login de Padre

  //async login(padre: LoginPadreDTO){
   // const {password,username}= padre;
   // const userFind = await this.padreRepository.findOne(
     // {where:{username}, select:{
       // password:true,
       // username:true,
       // nombre:true,
        //apellidos:true}}
//    );
//    if(!userFind){ throw new UnauthorizedException
//      ('Credenciales no validas');}
//    if(!bcrypt.compareSync(password, userFind.password)){
//      throw new UnauthorizedException('Credenciales no validas');
//    }
//    delete userFind.password
//    return {padre}
//  }

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
