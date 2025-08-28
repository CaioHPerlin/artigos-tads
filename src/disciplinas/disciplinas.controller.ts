import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { CreateDisciplinaDto } from './dto/disciplinas.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) {}

  @Post()
  create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinasService.create(createDisciplinaDto);
  }

  @Get()
  findAll() {
    return { data: this.disciplinasService.findAll() };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.disciplinasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisciplinaDto: UpdateDisciplinaDto,
  ) {
    return this.disciplinasService.update(id, updateDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.disciplinasService.remove(id);
    return { message: 'Disciplina removida com sucesso' };
  }
}
