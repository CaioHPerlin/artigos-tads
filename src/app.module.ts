import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtigosController } from './artigos/artigos.controller';
import { ArtigosService } from './artigos/artigos.service';

@Module({
  imports: [],
  controllers: [AppController, ArtigosController],
  providers: [AppService, ArtigosService],
})
export class AppModule {}
