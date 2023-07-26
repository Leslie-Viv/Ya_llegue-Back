import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncargadosService } from './encargados.service';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { loginDto } from './dto/login.dto';

@Controller('encargados')
export class EncargadosController {
  constructor(private readonly encargadosService: EncargadosService) {}

  @Post('loginEncargado')
  login(@Body() encargado:loginDto){
    return this.encargadosService.login(encargado);
  }

  @Post('nuevoEncargado')
  create(@Body() createEncargadoDto: CreateEncargadoDto) {
    return this.encargadosService.create(createEncargadoDto);
  }

  @Get()
  findAll() {
    return this.encargadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encargadosService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateEncargadoDto: UpdateEncargadoDto) {
    return this.encargadosService.update(+id, updateEncargadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encargadosService.remove(+id);
  }
}
