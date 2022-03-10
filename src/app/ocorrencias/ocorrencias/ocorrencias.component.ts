import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.scss']
})

export class OcorrenciasComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regiao_var: Regiao[] = [];
  faixaetaria_var: Faixaetaria[] = [];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService,
  ) { }

  ngOnInit(): void {
    this.ocorrencia_exame = this.ocorrenciaService.listOcorrencias();
    this.regiao_var = this.regiaoService.listRegiao();
    this.faixaetaria_var = this.faixaEtariaService.listFaixaEtaria();
  }
}
