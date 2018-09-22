import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

declare var $: any;

@Component({
  selector: 'app-categoria-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.css']
})
export class CategoriaGridComponent implements OnInit {

  categorias: Array<Categoria>;
  categoriaSelecionada: Categoria;

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
    this.categoriaSelecionada = new Categoria();
    $('#modalNova').modal('show');
  }

  onSalvarCategoria(event) {
    $('#modalNova').modal('hide');
    this.ngOnInit();
  }

  onRemoverCategoria(event) {
    $('#modalNova').modal('hide');
    this.ngOnInit();
  }

  editar(obj: Categoria) {
    this.categoriaSelecionada = obj;
    $('#modalNova').modal('show');
  }

}
