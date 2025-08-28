import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtigoDto } from './artigos/dto/artigos.dto';
import { UpdateArtigoDto } from './artigos/dto/update-artigos.dto';

export interface Artigo {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
  paginas: number;
}

@Injectable()
export class ArtigosService {
  private artigos: Artigo[] = [];
  private nextId = 1;

  create(createArtigoDto: CreateArtigoDto): Artigo {
    const artigo: Artigo = {
      id: this.nextId++,
      ...createArtigoDto,
    };
    this.artigos.push(artigo);
    return artigo;
  }

  findAll(): Artigo[] {
    return this.artigos;
  }

  findOne(id: number): Artigo {
    const artigo = this.artigos.find((a) => a.id === id);
    if (!artigo) throw new NotFoundException('Artigo não encontrado');
    return artigo;
  }

  update(id: number, updateArtigoDto: UpdateArtigoDto): Artigo {
    const artigo = this.findOne(id);
    Object.assign(artigo, updateArtigoDto);
    return artigo;
  }

  remove(id: number): void {
    const index = this.artigos.findIndex((a) => a.id === id);
    if (index === -1) throw new NotFoundException('Artigo não encontrado');
    this.artigos.splice(index, 1);
  }
}
