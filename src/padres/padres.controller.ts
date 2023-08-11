import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PadresService } from './padres.service';
import { CreatePadreDto } from './dto/create-padre.dto';
import { UpdatePadreDto } from './dto/update-padre.dto';
import { LoginPadreDTO } from './dto/login-padre.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import * as fs from 'fs';
import { Express } from 'express';

@Controller('padres')
@UsePipes(new ValidationPipe())
export class PadresController {
  constructor(private readonly padresService: PadresService) {}

//  @Post('registrarPadre')
//  create(@Body() createPadre: CreatePadreDto) {
//  return this.padresService.create(createPadre);
//  }

 //Nueva función para registrar al padre
 @Post('registro')
  @UseInterceptors(FileInterceptor('foto', {
    dest: './uploads',
    fileFilter: function (req, file, cb) {
      cb(null, true);
    },
  }))
  async registrarPadre(@UploadedFile() foto: Express.Multer.File, @Body() data: CreatePadreDto) {
    if (foto) {
      const idPadre = await this.padresService.obtenerUltimoId();
      const newFileName = `foto_padre_${idPadre}.jpg`; // Cambiamos la extensión a .jpg
      const filePath = join('./uploads', newFileName); // Ruta completa del archivo
      await fs.promises.rename(foto.path, filePath); // Renombrar y mover el archivo
  
      data.foto = newFileName; // Asignar el nuevo nombre al campo foto
    }
    const padre = await this.padresService.registrarPadre(data);
    return { message: 'Padre registrado exitosamente', padre };
  }

 @Post('login')
 login(@Body() padre: LoginPadreDTO){
 return this.padresService.login(padre);}


@Get()
findAll(){
  return this.padresService.findAll();
}

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
