import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PadresModule } from './padres/padres.module';
import { HijosModule } from './hijos/hijos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelaModule } from './escuela/escuela.module';
import { Escuela } from './escuela/entities/escuela.entity';



@Module({
  imports: [PadresModule, HijosModule, EscuelaModule,TypeOrmModule.forFeature([Escuela]), TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'ya_llegue',
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
