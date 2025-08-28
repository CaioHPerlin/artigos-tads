import { PartialType } from '@nestjs/mapped-types';
import { CreateDisciplinaDto } from './disciplinas.dto';

export class UpdateDisciplinaDto extends PartialType(CreateDisciplinaDto) {}
