import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    // this.http.get('http://localhost:8080/categorias').subscribe(
    //   (retorno) => {
    //     // aqui temos todos os retornos da api
    //     console.log('foi', retorno);

    //   },
    //   (erro) => {
    //     console.log('Falha', erro);
    //     // tratar o erro...
    //   }
    // );
  }

}
