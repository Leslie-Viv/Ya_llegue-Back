import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PadresService } from './padres.service';
import { CreatePadreDto } from './dto/create-padre.dto';
import { UpdatePadreDto } from './dto/update-padre.dto';
import { LoginPadreDTO } from './dto/login-padre.dto';

@Controller('padres')
@UsePipes(new ValidationPipe())
export class PadresController {
  constructor(private readonly padresService: PadresService) {}

 @Post('registrarPadre')
 create(@Body() createPadre: CreatePadreDto) {
 return this.padresService.create(createPadre);
 }

 @Post('login')
 login(@Body() padre: LoginPadreDTO){
 return this.padresService.login(padre);}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.padresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePadreDto: UpdatePadreDto) {
    return this.padresService.update(+id, updatePadreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.padresService.remove(+id);
  }
}
