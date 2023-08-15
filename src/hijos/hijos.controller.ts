import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { HijosService } from './hijos.service';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';

@Controller('hijos')
@UsePipes(new ValidationPipe())
export class HijosController {
  constructor(private readonly hijosService: HijosService) {}

  //Metodo para registrar alumno/hijo
  @Post('registrarHijo')
  create(@Body() createHijo: CreateHijoDto) {
    return this.hijosService.create(createHijo);
  }

  @Get()
  findAll() {
    return this.hijosService.findAll();
  }

  //Metodo para obtener alumno por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hijosService.findOne(+id);
  }
//Metodo para actualizar alumno/hijo
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHijo: UpdateHijoDto) {
    return this.hijosService.update(+id, updateHijo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hijosService.remove(+id);
  }
}
