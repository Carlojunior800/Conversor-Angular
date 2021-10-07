import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MedidaService, ConversorService } from './services';
import { ModalCotacaoComponent } from './utils';



@NgModule({
  declarations: [
    ConversorComponent,
    ModalCotacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers: [
    MedidaService,
    ConversorService
  ]
})
export class ConversorModule { }
