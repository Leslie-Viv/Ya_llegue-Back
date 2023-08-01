import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PadresModule } from './padres/padres.module';
import { EncargadosModule } from './encargados/encargados.module';
import { HijosModule } from './hijos/hijos.module';
import { EscuelaModule } from './escuela/escuela.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './escuela/entities/escuela.entity';
import { Hijo } from './hijos/entities/hijo.entity';
import { Encargado } from './encargados/entities/encargado.entity';
import { Padre } from './padres/entities/padre.entity';


@Module({
  imports: [PadresModule, EncargadosModule, HijosModule,
     EscuelaModule,TypeOrmModule.forFeature([Escuela, Hijo, Encargado, Padre]),
      TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234', 
    //Deje mi password comentada porque mi pcerda 
    //tiene configurada password en la BD y no puedo cambiarla hasta ahora
    //password: 'password',
    database: 'ya_llegue',
    autoLoadEntities: true,
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
