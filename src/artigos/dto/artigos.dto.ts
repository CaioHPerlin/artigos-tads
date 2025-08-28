import { IsString, IsInt, Min, Max, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateArtigoDto {
  @IsString()
  @Length(1, 255)
  titulo: string;

  @IsString()
  @Length(1, 1000)
  descricao: string;

  @IsString()
  @Length(1, 255)
  autor: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10000)
  paginas: number;
}
