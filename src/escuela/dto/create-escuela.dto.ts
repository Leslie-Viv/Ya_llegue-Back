import { IsString } from "class-validator";

export class CreateEscuelaDto {

    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;

    @IsString()
    matricula:  string;

    @IsString()
    puesto: string;

    @IsString()
    foto: string;
}
