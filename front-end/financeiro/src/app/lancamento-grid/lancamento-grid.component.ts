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
    $('#modalNovo').modal('show');
  }

}
