import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoriaGridComponent } from './categoria-grid/categoria-grid.component';
import { RotasRoutingModule } from './rotas/rotas-routing.module';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    CategoriaGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RotasRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
