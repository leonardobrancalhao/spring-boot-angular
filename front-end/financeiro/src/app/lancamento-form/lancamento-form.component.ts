import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from '../model/categoria';
import { Lancamento, TipoLancamento } from '../model/lancamento';
import { CategoriaService } from '../service/categoria.service';
import { LancamentoService } from '../service/lancamento.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit, OnChanges {

  @Input() lancamento: Lancamento = new Lancamento();

  @Input() newPage = false;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSalvar: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemover: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  listaCategoria: Categoria[];

  constructor(
    private fb: FormBuilder,
    private service: LancamentoService,
    private categoriaService: CategoriaService) {

    this.form = fb.group({
      id: [''],
      nome: [''],
      tipo: [''],
      valor: [''],
      data: [''],
      categoria: ['']
    });

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.form.reset();
    if (changes.lancamento && this.lancamento) {
      this.form.patchValue(this.lancamento);
    }
  }

  salvar() {
    this.lancamento = this.form.value;

    this.service.salvar(this.lancamento).subscribe(
      () => {
        console.log('Deu certo');
        this.onSalvar.emit();
      },
      (erro) => {
        console.log('Deu errado', erro);
      }
    );
  }

  remover() {
    this.lancamento = this.form.value;

    this.service.remover(this.lancamento.id).subscribe(
      () => {
        console.log('Deu certo');
        this.onRemover.emit();
      },
      (erro) => {
        console.log('Deu errado', erro);
      }
    );
  }

  buscarCategoria(event) {
    this.categoriaService.listarPorNome(event.query).subscribe(
      (response) => {
        this.listaCategoria = response;
      },
      (erro) => {
        console.log('Falha ao listar categoria', erro);
      }
    );
  }

}
