import { Module } from '@nestjs/common';
import { HijosService } from './hijos.service';
import { HijosController } from './hijos.controller';

@Module({
  controllers: [HijosController],
  providers: [HijosService]
})
export class HijosModule {}
