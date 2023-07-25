import { Module } from '@nestjs/common';
import { PadresService } from './padres.service';
import { PadresController } from './padres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encargado } from 'src/encargados/entities/encargado.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Hijo } from 'src/hijos/entities/hijo.entity';
import { Padre } from './entities/padre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hijo, Padre, Encargado, Escuela])
  ],
  controllers: [PadresController],
  providers: [PadresService]
})
export class PadresModule {}
