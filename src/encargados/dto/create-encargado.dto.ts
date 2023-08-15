import { IsString } from "class-validator";


export class CreateEncargadoDto {
    @IsString()
    nombre: string
    @IsString()
    apellidos:string
    
    foto:string
    
}
