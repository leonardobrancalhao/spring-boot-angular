import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

declare var $: any;

@Component({
  selector: 'app-categoria-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.css']
})
export class CategoriaGridComponent implements OnInit {

  categorias: Array<Categoria>;

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.service.listar().subscribe(
      (response) => {
        this.categorias = response;
      },
      (erro) => {
        console.log('Falha na requisição', erro);
      }
    );
  }

  nova() {
    $('#modalNova').modal('show');
  }

}
