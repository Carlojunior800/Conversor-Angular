import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConversorService, MedidaService } from '../services';
import { Medida, Conversao, ConversaoResponse } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  medidas: Medida[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(private medidaService: MedidaService, private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.medidas = this.medidaService.listarTodos()
    this.init()
  }

  init(): void {
    this.conversao = new Conversao("°C", "°F", null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao).subscribe(
        response => this.conversaoResponse = response,
        error => this.possuiErro = true
      )
    }
  }

}
