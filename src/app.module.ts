import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PadresModule } from './padres/padres.module';
import { HijosModule } from './hijos/hijos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelaModule } from './escuela/escuela.module';
import { Escuela } from './escuela/entities/escuela.entity';
import { EncargadosModule } from './encargados/encargados.module';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
