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
import { ArtigosService } from './artigos.service';
import { CreateArtigoDto } from './dto/artigos.dto';
import { UpdateArtigoDto } from './dto/update-artigos.dto';

@Controller('artigos')
export class ArtigosController {
  constructor(private readonly artigosService: ArtigosService) {}

  @Post()
  create(@Body() createArtigoDto: CreateArtigoDto) {
    return this.artigosService.create(createArtigoDto);
  }

  @Get()
  findAll() {
    return this.artigosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.artigosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArtigoDto: UpdateArtigoDto,
  ) {
    return this.artigosService.update(id, updateArtigoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.artigosService.remove(id);
    return { message: 'Artigo removido com sucesso' };
  }
}
