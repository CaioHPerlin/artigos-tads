import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DisciplinasModule } from './disciplinas/disciplinas.module';

@Module({
  imports: [DisciplinasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
