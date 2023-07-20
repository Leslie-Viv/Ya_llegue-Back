import { Controller, Get, Post, Body, Patch, Param, Delete,Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { LoginDto } from './dto/login-escuela.dto';

@Controller('escuela')
export class EscuelaController {
  constructor(private readonly escuelaService: EscuelaService) {}

  @Post('register')
create(@Body() createEscuela: CreateEscuelaDto) {
  return this.escuelaService.create(createEscuela);
}

@Post('login')
login(@Body() escuela: LoginDto){
  return this.escuelaService.login(escuela);
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

  @Get('search')
  search(@Query('nombre') nombre: string) {
    return this.escuelaService.search(nombre);
  }
  
}
