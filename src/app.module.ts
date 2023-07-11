import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncargadosModule } from './encargados/encargados.module';


@Module({
  imports: [EncargadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
