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
    private readonly jwtService: JwtService,
    @InjectRepository(Escuela)
    private readonly escuelaRepository: Repository<Escuela>,
  ) {}

  async create(createEscuela: CreateEscuelaDto) {
    try {
      const { password, ...userData } = createEscuela;
      const escuela = this.escuelaRepository.create({
        ...userData,
        password: await bcrypt.hash(password, 10), // Usar async/await aquí
      });
      await this.escuelaRepository.save(escuela);
      delete escuela.password;
      return { ...escuela };
    } catch (error) {
      throw new BadRequestException(error.message); // Lanzar la excepción en lugar de devolver el error
    }
  }

  async login(escuela: LoginDto) {
    const { matricula, password } = escuela;
    const userFind = await this.escuelaRepository.findOne({
      where: { matricula },
      select: {
        password: true,
        nombre: true,
        apellidos: true,
        matricula: true,
        puesto: true,
        foto: true,
        estado: true,
      },
    });
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

  async findAll() {
    const escuelas = await this.escuelaRepository.find();
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
    // Implementar la lógica para actualizar una escuela según el ID proporcionado
  }

  async remove(id: number) {
    await this.escuelaRepository.delete(id);
    return 'La escuela ha sido removida';
  }

  async search(nombre: string) {
    const escuelas = await this.escuelaRepository.find({
      where: { nombre: Like(`%${nombre}%`) },
    });
    return escuelas;
  }
}
