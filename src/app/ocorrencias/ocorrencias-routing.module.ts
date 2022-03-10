import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';

const routes: Routes = [
  {
    path: '', component: OcorrenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }
