import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy, } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Strategy, ExtractJwt } from 'passport-Jwt'
import { Encargado } from '../entities/encargado.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(Encargado)
        private readonly encargadoRepo: Repository<Encargado>) {
        super({
            JwtFromRequest: ExtractJwt.fromAuthHeadesAsBearerToken(),
            secretOrkey: 'secretWord'
        });
    }
    async validate(payload: { id: number, nombre: string, apellidos: string }): Promise<Encargado> {
        const { id } = payload;
        const encargado = await this.encargadoRepo.findOneBy({ id });
        if (!encargado) {
            throw new UnauthorizedException('Token no valido');
        }
        return encargado;
    }
}