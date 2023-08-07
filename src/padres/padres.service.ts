import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
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
  async create(createPadre: CreatePadreDto) {
    try {
      const{password,...useData}=createPadre;
      const padre = this.padreRepository.create({
        ...useData, password: bcrypt.hashSync(password, 10)
      });
      await this.padreRepository.save(padre);
      delete padre.password;
      return{...padre}
    } catch ([error]) {
      return error;
    }
  //const padre = this.padreRepository.create(createPadre);
  //await this.padreRepository.save(padre);
  //return padre;
}



  //Funcion para login de Padre

async login(padre: LoginPadreDTO){
  const {password,username}= padre;
  const userFind = await this.padreRepository.findOne(
  {where:{username}, select:{
       password:true,
       username:true,
       nombre:true,
        apellidos:true}}
);
    if(!userFind){ throw new UnauthorizedException
      ('Credenciales no validas');}
    if(!bcrypt.compareSync(password, userFind.password)){
      throw new UnauthorizedException('Credenciales no validas');
    }
    delete userFind.password
    return {padre}
  }

  //Funcion para encontrar padre por ID

  async findOne(id: number) {
    const task = await this.padreRepository.findOne({where: {id}});
    if (!task){
      //return {msn: 'No encontrado'}
      throw new BadRequestException("Padre no encontrado");
    }
    return task;
  }

  //Funcion para encontrar todos los padres
  findAll(){
    const padres = this.padreRepository.find();
    return padres;
  }

  update(id: number, updatePadreDto: UpdatePadreDto) {
    return `This action updates a #${id} padre`;
  }

  remove(id: number) {
    return `This action removes a #${id} padre`;
  }


}
