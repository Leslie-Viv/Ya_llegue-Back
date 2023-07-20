
import { IsString, IsNotEmpty, IsNumber, IsEmail} from 'class-validator';

export class LoginDto  {

    @IsEmail()
    @IsNotEmpty()
    matricula: string

    @IsString()
    @IsNotEmpty()
    password: string

}