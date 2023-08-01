// escuela.module.ts
import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Escuela]),
    JwtModule.register({
      secret: 'secretWord', // Reemplaza esto con tu propia clave secreta
    }),
  ],
  controllers: [EscuelaController],
  providers: [EscuelaService]
})
export class EscuelaModule {}
