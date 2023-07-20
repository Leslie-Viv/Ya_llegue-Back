import { IsNotEmpty, IsString } from "class-validator";

export class CreateEscuelaDto {

    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    matricula:  string;

    @IsString()
    puesto: string;

    @IsString()
    foto: string;
}
