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
    private jwtService:JwtService,
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
if (!userFind || !(await bcrypt.compare(password, userFind.password))) {
  // Simplificar la comprobación de autenticación
  throw new UnauthorizedException('Credenciales no válidas');
}
delete userFind.password;
const token = this.getJWToken({
  id: userFind.id,
  nombre: userFind.nombre,
  apellidos: userFind.apellidos,
});
return { ...userFind, token };
}

private getJWToken(payload: { id: number; nombre: string; apellidos: string }) {
  const token = this.jwtService.sign(payload);
  return token;
}

validaToken(token: any) {
  try {
    this.jwtService.verify(token.token); // No es necesario proporcionar el 'secret', ya que se configuró al inicializar JwtModule
    return true;
  } catch (error) {
    throw new UnauthorizedException('Token no válido');
  }
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
