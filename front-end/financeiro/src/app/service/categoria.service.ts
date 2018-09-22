import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public listar(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>('http://localhost:8080/categorias');
  }

  public salvar(obj: Categoria): Observable<void> {
    if (!obj) {
      return throwError('Categoria inválida');
    }

    if (!obj.nome || obj.nome.trim().length <= 0) {
      return throwError('Nome da categoria inválido');
    }

    return this.http.post<void>('http://localhost:8080/categorias', obj);
  }

  public remover(id: number): Observable<any> {
    if (!id || id <= 0) {
      return throwError('Categoria inválida');
    }

    return this.http.post('http://localhost:8080/categorias/remover', id);
  }

}
