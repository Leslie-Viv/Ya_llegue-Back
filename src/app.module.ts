import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelaModule } from './escuela/escuela.module';
import { Escuela } from './escuela/entities/escuela.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ya_llegue',
      entities:[Escuela],
      synchronize: true,
    }),
    EscuelaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
