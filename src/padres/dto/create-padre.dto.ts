import { IsNotEmpty, IsString, MinLength, isNotEmpty } from "class-validator";

export class CreatePadreDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string

    @IsString()
    @IsNotEmpty()
    apellidos: string

    @IsString()
    foto: string

    @IsString()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string


}
