import { Module } from "@nestjs/common";
import { DisciplinasController } from "./disciplinas.controller";
import { DisciplinasService } from "./disciplinas.service";

@Module({
  imports: [],
  controllers: [DisciplinasController],
  providers: [DisciplinasService],
})
export class DisciplinasModule {}
