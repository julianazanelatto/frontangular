import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http:HttpClient) { }

  listFaixaEtaria(): Observable<Faixaetaria[] >{
    //const caminhourl = '/assets/faixaetaria.json';
    const caminhourl = '/api/faixaetaria';
    
    return this.http.get<Faixaetaria[]>(caminhourl);
    // [
    //   { id: 1, faixa_i: 0, faixa_n: 14, descricao: 'Até 14 anos' },
    //   { id: 2, faixa_i: 15, faixa_n: 19, descricao: 'Entre 15 e 19 anos' }
    // ];
  }
}
