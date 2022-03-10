import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  listRegiao(): Regiao[] {
    return [
      { id: 1, regiao: 'Norte', total_exames: 10 },
      { id: 2, total_exames: 40, regiao: 'Nordeste' },
      { id: 3, total_exames: 1250, regiao: 'Sudeste' },
      { id: 4, total_exames: 1505, regiao: 'Sul' },
      { id: 5, total_exames: 20, regiao: 'Centro-Oeste' }
    ];
  }
}
