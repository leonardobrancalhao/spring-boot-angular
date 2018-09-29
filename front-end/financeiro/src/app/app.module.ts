import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaGridComponent } from './categoria-grid/categoria-grid.component';
import { RotasRoutingModule } from './rotas/rotas-routing.module';
import { TemplateComponent } from './template/template.component';
import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    CategoriaGridComponent,
    CategoriaFormComponent,
    LancamentoGridComponent,
    LancamentoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RotasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
