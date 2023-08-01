import { Module } from '@nestjs/common';
import { HijosService } from './hijos.service';
import { HijosController } from './hijos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hijo } from './entities/hijo.entity';
import { Padre } from 'src/padres/entities/padre.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Padre, Hijo])
],
  controllers: [HijosController],
  providers: [HijosService]
})
export class HijosModule {}
