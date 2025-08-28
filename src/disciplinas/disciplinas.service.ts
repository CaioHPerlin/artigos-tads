import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/disciplinas.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { Disciplina } from './entities/disciplina.entity';

@Injectable()
export class DisciplinasService {
  private disciplinas: Disciplina[] = [];
  private nextId = 1;

  create(createDisciplinaDto: CreateDisciplinaDto): Disciplina {
    const disciplina: Disciplina = {
      id: this.nextId++,
      ...createDisciplinaDto,
    };
    this.disciplinas.push(disciplina);
    return disciplina;
  }

  findAll(): Disciplina[] {
    return this.disciplinas;
  }

  findOne(id: number): Disciplina {
    const disciplina = this.disciplinas.find((a) => a.id === id);
    if (!disciplina) throw new NotFoundException('Disciplina não encontrada');
    return disciplina;
  }

  update(id: number, updateDisciplinaDto: UpdateDisciplinaDto): Disciplina {
    const disciplina = this.findOne(id);
    Object.assign(disciplina, updateDisciplinaDto);
    return disciplina;
  }

  remove(id: number): void {
    const index = this.disciplinas.findIndex((a) => a.id === id);
    if (index === -1) throw new NotFoundException('Disciplina não encontrada');
    this.disciplinas.splice(index, 1);
  }
}
