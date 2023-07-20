import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Like, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login-escuela.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EscuelaService {

constructor(
  private jwtS:JwtService,
  @InjectRepository(Escuela) private escuelaRepository: Repository <Escuela>
){}


async create(createEscuela: CreateEscuelaDto) {
  try {
    const{password,...useData}=createEscuela;
    const escuela = this.escuelaRepository.create({
      ...useData, password: bcrypt.hashSync(password, 10)
    });
    await this.escuelaRepository.save(escuela);
    delete escuela.password;
    return{...escuela}
  } catch ([error]) {
    return error
  }
}

async login(escuela: LoginDto){
  const {matricula, password}= escuela;
  const userFind = await this.escuelaRepository.findOne(
    {where:{matricula}, select:{
      password:true, 
      nombre:true,
      apellidos:true,
      matricula: true,
      puesto:true,
      foto:true,
      estado:true}}
  );
  if(!userFind){ throw new UnauthorizedException
    ('Credenciales no validas');}
  if(!bcrypt.compareSync(password, userFind.password)){
    throw new UnauthorizedException('Credenciales no validas');
  }
  delete userFind.password
  return {...userFind,
            token:this.getJWToken({id:userFind.id, nombre:userFind.nombre,apellidos:userFind.apellidos})};
}

private getJWToken(payload:{id:number, nombre:string, apellidos:string}){
  const token = this.jwtS.sign(payload);
  return token;
}

validaToken(token: any){
  try{
    this.jwtS.verify(token.token, {secret: 'secretWord'});
    return true;
  }
  catch(error){
    throw new UnauthorizedException('Token no valido')
  }
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

