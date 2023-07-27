import { IsNotEmpty, IsString } from "class-validator"

export class LoginPadreDTO{
    @IsNotEmpty()
    @IsString()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string
}