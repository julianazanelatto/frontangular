import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})

export class OcorrenciaService {

  constructor() { }
  
  //método para retornar info
  listOcorrencias(): Ocorrencia[] {
     return [
      {id:1,regiao_id:2,Mes:5,faixa_id:1,qnt_exames: 44}
    ];
  }
  
}

export class RegiaoService{
  
  constructor( ) { }
  
  listRegiao():Regiao[]{
    return [
      {id:1, regiao:'Norte', total_exames:10},
      {id:2,total_exames:40,regiao:'Nordeste'},
      {id:3,total_exames:1250,regiao:'Sudeste'},
      {id:4,total_exames:1505,regiao:'Sul'},
      {id:5,total_exames:20,regiao:'Centro-Oeste'}
    ];
  }
}

export class FaixaEtariaService{
  
  constructor() { }
  
  listRegiao():Faixaetaria[]{
    return [
      {id:1,faixa_i:0,faixa_n:14, descricao:'Até 14 anos'},
      {id:2,faixa_i:15,faixa_n:19, descricao:'Entre 15 e 19 anos'}
    ];
  }
}

