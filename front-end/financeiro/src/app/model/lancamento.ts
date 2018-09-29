import { Categoria } from './categoria';

export class Lancamento {
  id: number;
  nome: string;
  tipo: TipoLancamento;
  categoria: Categoria;
  valor: number;
  data: Date;
}

export enum TipoLancamento {
  RECEITA,
  DESPESA
}
