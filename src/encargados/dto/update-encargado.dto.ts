import { PartialType } from '@nestjs/mapped-types';
import { CreateEncargadoDto } from './create-encargado.dto';
import { IsString } from 'class-validator';

export class UpdateEncargadoDto extends PartialType(CreateEncargadoDto) {

    @IsString()
    nombre: string
    @IsString()
    apellidos:string

    foto:string
}
