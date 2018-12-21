import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, OnChanges {

  @Input() categoria: Categoria = new Categoria();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSalvar: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemover: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CategoriaService,
    private mensagem: MessageService) {

    this.form = fb.group({
      id: [''],
      nome: ['', Validators.required],
      descricao: ['']
    });

  }

  ngOnInit() {
    AppComponent.onConfirmar.subscribe(
      (responde) => {
        if (responde) {
          this.remover();
        }
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.form.reset();
    if (changes.categoria && this.categoria) {
      this.form.patchValue(this.categoria);
    }
  }

  salvar() {
    this.categoria = this.form.value;

    this.service.salvar(this.categoria).subscribe(
      () => {
        this.mensagem.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Categoria salva com sucesso'
        });

        this.onSalvar.emit();
      },
      (erro) => {
        this.mensagem.add({
          severity: 'error',
          summary: 'Atenção',
          detail: 'Não foi possível salvar a categoria'
        });
      }
    );
  }

  confirmarRemover() {
    this.mensagem.clear();

    this.mensagem.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Deseja remover essa categoria?'
    });
  }

  private remover() {
    this.categoria = this.form.value;

    this.service.remover(this.categoria.id).subscribe(
      () => {
        this.mensagem.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Categoria removida'
        });
        this.onRemover.emit();
      },
      (erro) => {
        this.mensagem.add({
          severity: 'error',
          summary: 'Atenção',
          detail: 'Não foi possível remover a categoria'
        });
      }
    );
  }

}
