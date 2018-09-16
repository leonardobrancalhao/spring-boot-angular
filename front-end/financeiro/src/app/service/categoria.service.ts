import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public listar(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>('http://localhost:8080/categorias');
  }

}
