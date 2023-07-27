import { Module } from '@nestjs/common';
import { PadresService } from './padres.service';
import { PadresController } from './padres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Padre } from './entities/padre.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [

    TypeOrmModule.forFeature([Padre]),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({secret:'secretWord', signOptions:{expiresIn:'1h'}})

    TypeOrmModule.forFeature([ Padre])
  ],
  controllers: [PadresController],
  providers: [PadresService, PassportModule, JwtModule],
  exports: [PassportModule, JwtModule]
})
export class PadresModule {}
