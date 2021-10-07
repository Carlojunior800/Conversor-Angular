import { Injectable } from '@angular/core';
import { Medida } from '../models';
import { ConversaoResponse, Conversao} from '../models';

@Injectable()
export class MedidaService {

  private medidas: Medida[];
   conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;
  constructor() { }


  private medidasObj = [
    { "sigla": "°C", "descricao": "Celsius" },
    { "sigla": "°F", "descricao": "Fahrenheit" },
    { "sigla": "K", "descricao": "Kelvin" }
  ];

  listarTodos(): Medida[] {
    if (this.medidas) {
      return this.medidas;
    }
    this.medidas = [];

    for (let medidasObj of this.medidasObj) {
      let medida: Medida = new Medida();
      Object.assign(medida, medidasObj);
      this.medidas.push(medida);
    }

    return this.medidas;
  }
}
