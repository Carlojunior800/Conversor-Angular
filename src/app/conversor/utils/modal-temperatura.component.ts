import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversorService } from '../services';
import { Conversao, ConversaoResponse } from '../models';


@Component({
  selector: 'modal-temperatura',
  templateUrl: './modal-temperatura.component.html',
  styleUrls: ['./modal-temperatura.component.css']
})
export class ModalCotacaoComponent implements OnInit {
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();
  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void { }

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
    let x:any = this.conversorService.converter(this.conversao);
      return x;
  }

  get unidadeDe(): string {
    return this.conversorService.unidadeDe(this.conversaoResponse, this.conversao);
  }

  get unidadePara(): number {
    return this.conversorService.unidadePara(this.conversaoResponse, this.conversao);
  }


}

