import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HijosService } from './hijos.service';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';

@Controller('hijos')
export class HijosController {
  constructor(private readonly hijosService: HijosService) {}

  @Post('registrarHijo')
  create(@Body() createHijo: CreateHijoDto) {
    return this.hijosService.create(createHijo);
  }

  @Get()
  findAll() {
    return this.hijosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hijosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHijoDto: UpdateHijoDto) {
    return this.hijosService.update(+id, updateHijoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hijosService.remove(+id);
  }
}
