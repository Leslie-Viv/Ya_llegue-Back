import { Module } from '@nestjs/common';
import { PadresService } from './padres.service';
import { PadresController } from './padres.controller';

@Module({
  controllers: [PadresController],
  providers: [PadresService]
})
export class PadresModule {}
