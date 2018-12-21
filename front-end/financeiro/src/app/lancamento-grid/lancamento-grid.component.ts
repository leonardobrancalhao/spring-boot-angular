import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../model/lancamento';
import { LancamentoService } from '../service/lancamento.service';

declare var $: any;

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent implements OnInit {

  lancamentos: Array<Lancamento>;
  lancamentoSelecionado: Lancamento;

  constructor(private service: LancamentoService) { }

  ngOnInit() {
    this.service.listar().subscribe(
      (response) => {
        this.lancamentos = response;
      },
      (erro) => {
        console.log('Erro ao listar', erro);
      }
    );
  }

  novo() {
    this.lancamentoSelecionado = new Lancamento();
    $('#modalNovo').modal('show');
  }

  onSalvarLancamento(event) {
    $('#modalNovo').modal('hide');
    this.ngOnInit();
  }

  editar(lancamento) {
    this.lancamentoSelecionado = lancamento;
    $('#modalNovo').modal('show');
  }

}
