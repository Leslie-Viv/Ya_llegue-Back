import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PadresModule } from './padres/padres.module';
import { HijosModule } from './hijos/hijos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelaModule } from './escuela/escuela.module';
import { Escuela } from './escuela/entities/escuela.entity';
import { Hijo } from './hijos/entities/hijo.entity';
import { Padre } from './padres/entities/padre.entity';
import { Encargado } from './encargados/entities/encargado.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ya_llegue',
      entities:[Escuela, Hijo, Padre, Encargado],
      synchronize: true,
    }),
    EscuelaModule,
    PadresModule, HijosModule,],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
