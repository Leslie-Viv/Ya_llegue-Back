import { Module } from '@nestjs/common';
import { HijosService } from './hijos.service';
import { HijosController } from './hijos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hijo } from './entities/hijo.entity';
import { Padre } from 'src/padres/entities/padre.entity';
import { Encargado } from 'src/encargados/entities/encargado.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Hijo, Padre, Encargado, Escuela])
],
  controllers: [HijosController],
  providers: [HijosService]
})
export class HijosModule {}
