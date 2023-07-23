import { IsNotEmpty } from "@nestjs/class-validator"
import { IsString } from "class-validator"

export class CreateHijoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string
    @IsString()
    @IsNotEmpty()
    apellidos: string
    @IsString()
    @IsNotEmpty()
    grupo: string
    @IsNotEmpty()
    @IsString()
    matricula: string
    @IsNotEmpty()
    @IsString()
    foto: string
    @IsNotEmpty()
    @IsString()
    observaciones: string
    @IsNotEmpty()
    padreID: number
}
