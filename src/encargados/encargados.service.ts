import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';
import { Repository } from 'typeorm';
import { loginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EncargadosService {
  
  async login(encargado:loginDto){
    const {password, email}=encargado;
    const encargadoFind=await this.encargadoRepository.findOne(
      {where:{email}, select:{password:true, email:true, 
      nombre:true, apellidos:true}}
    );
    if(!encargadoFind){
      throw new UnauthorizedException('Credenciales no válidas');
    }
    if (!bcrypt.compareSync(password, encargadoFind.password)){
      throw new UnauthorizedException('Esa no es la contraseña')
    }
    delete encargadoFind.password;
    return{
      ...encargadoFind,
      token: this.getJWToken({id:encargadoFind.id, nombre:encargadoFind.nombre,
      apellidos: encargadoFind.apellidos})
    }
  }
  private getJWToken(payload:{id:number, nombre:string, apellidos:string}){
    const token= this.jwts.sign(payload);
    return token;
  }
  validaToken(token:any){
    try{
      this.jwts.verify(token.token,{secret:'secretword'});
      return true;
    }
    catch(error){
      throw new UnauthorizedException('Token no valido')
    }
  }
  
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
      throw new BadRequestException("Encagado no encontrado");
    }
    return encargado
  }

  async update(id: number, updateEncargado: UpdateEncargadoDto) {
    await this.encargadoRepository.update(id, updateEncargado);
    const encargado= await this.encargadoRepository.findOne({where:{id}});
    if(!encargado){
      throw new BadRequestException("Encagado no encontrado");
    }
    return encargado
  }

  remove(id: number) {
    this.encargadoRepository.delete(id);
  }

  constructor(
    @InjectRepository(Encargado) private encargadoRepository: Repository<Encargado>,
  private jwts:JwtService){}
}
