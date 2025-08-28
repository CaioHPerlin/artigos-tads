import { PartialType } from '@nestjs/mapped-types';
import { CreateArtigoDto } from './artigos.dto';

export class UpdateArtigoDto extends PartialType(CreateArtigoDto) {}
