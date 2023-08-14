import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePadreDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string

    @IsString()
    @IsNotEmpty()
    apellidos: string


    foto: string

    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsString()
    password: string


}
