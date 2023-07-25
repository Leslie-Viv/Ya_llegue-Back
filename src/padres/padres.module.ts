import { Module } from '@nestjs/common';
import { PadresService } from './padres.service';
import { PadresController } from './padres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Padre } from './entities/padre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Padre])
  ],
  controllers: [PadresController],
  providers: [PadresService]
})
export class PadresModule {}
