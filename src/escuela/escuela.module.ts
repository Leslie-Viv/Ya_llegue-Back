import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encargado } from 'src/encargados/entities/encargado.entity';
import { Hijo } from 'src/hijos/entities/hijo.entity';
import { Padre } from 'src/padres/entities/padre.entity';
import { Escuela } from './entities/escuela.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hijo, Padre, Encargado, Escuela])
  ],
  controllers: [EscuelaController],
  providers: [EscuelaService]
})
export class EscuelaModule {}
