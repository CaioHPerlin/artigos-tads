import { IsString, IsInt, Min, Max, Length } from 'class-validator';

export class CreateDisciplinaDto {
  @IsString()
  @Length(1, 255)
  nome: string;

  @IsInt()
  @Min(1)
  cargaHoraria: number;

  @IsInt()
  @Min(1)
  semestre: number;

  @IsString()
  @Length(1, 255)
  curso: string;
}
