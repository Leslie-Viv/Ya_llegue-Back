import { Module } from '@nestjs/common';
import { EncargadosService } from './encargados.service';
import { EncargadosController } from './encargados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Hijo } from 'src/hijos/entities/hijo.entity';
import { Padre } from 'src/padres/entities/padre.entity';
import { Encargado } from './entities/encargado.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hijo, Padre, Encargado, Escuela])
  ],
  controllers: [EncargadosController],
  providers: [EncargadosService]
})
export class EncargadosModule {}
