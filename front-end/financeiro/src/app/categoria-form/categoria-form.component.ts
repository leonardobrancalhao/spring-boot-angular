import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

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
    private service: CategoriaService) {

    this.form = fb.group({
      id: [''],
      nome: [''],
      descricao: ['']
    });

  }

  ngOnInit() {
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
        console.log('Deu certo');
        this.onSalvar.emit();
      },
      (erro) => {
        console.log('Deu errado', erro);
      }
    );
  }

  remover() {
    this.categoria = this.form.value;

    this.service.remover(this.categoria.id).subscribe(
      () => {
        console.log('Deu certo');
        this.onRemover.emit();
      },
      (erro) => {
        console.log('Deu errado', erro);
      }
    );
  }

}
