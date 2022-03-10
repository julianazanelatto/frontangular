import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService, OcorrenciaService, RegiaoService } from '../service/ocorrencia.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.scss']
})

export class OcorrenciasComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];

  regiao_var: Regiao[] = [];

  faixaetaria_var: Faixaetaria[] = [ ];

  // variáveis de serviço
  ocorrenciaService: OcorrenciaService;
  regiaoService: RegiaoService;
  faixaEtariaService: FaixaEtariaService;

  constructor() {
    this.ocorrenciaService = new OcorrenciaService;
    this.ocorrencia_exame = this.ocorrenciaService.listOcorrencias();

    this.regiaoService = new RegiaoService;
    this.regiao_var = this.regiaoService.listRegiao();    

    this.faixaEtariaService = new FaixaEtariaService;
    this.faixaetaria_var = this.faixaEtariaService.listRegiao();
  }

  ngOnInit(): void {
    
  }

}
