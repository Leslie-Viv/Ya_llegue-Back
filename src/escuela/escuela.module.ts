import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Escuela]),
            PassportModule.register({defaultStrategy:'jwt'}),
            JwtModule.register({secret:'secretWord', signOptions:{expiresIn:'1h'}})],
  controllers: [EscuelaController],
  providers: [EscuelaService]
})
export class EscuelaModule {}
