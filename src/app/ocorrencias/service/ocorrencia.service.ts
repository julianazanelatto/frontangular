import { Injectable } from '@angular/core';
import { Ocorrencia } from '../model/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor() { }

  //método para retornar info
  listOcorrencias(): Ocorrencia[] {
    return [
      { id: 1, regiao_id: 2, Mes: 5, faixa_id: 1, qnt_exames: 44 }
    ];
  }

}
