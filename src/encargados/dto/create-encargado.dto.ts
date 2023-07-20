import { IsString } from "class-validator";
export class CreateEncargadoDto {}


export class CreateTaskDto {
    @IsString()
    nombre: string
    @IsString()
    apellidos:string
    @IsString()
    foto:string
    
}
