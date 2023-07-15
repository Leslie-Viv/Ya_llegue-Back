import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';

@Controller('escuela')
export class EscuelaController {
  constructor(private readonly escuelaService: EscuelaService) {}

  @Post('createEscuela')
create(@Body() createEscuela: CreateEscuelaDto) {
  return this.escuelaService.create(createEscuela);
}


  @Get()
  findAll() {
    return this.escuelaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escuelaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscuelaDto: UpdateEscuelaDto) {
    return this.escuelaService.update(+id, updateEscuelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escuelaService.remove(+id);
  }
}
