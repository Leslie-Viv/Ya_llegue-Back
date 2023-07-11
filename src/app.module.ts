import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PadresModule } from './padres/padres.module';
import { HijosModule } from './hijos/hijos.module';


@Module({
  imports: [PadresModule, HijosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
