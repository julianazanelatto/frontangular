import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'ocorrencias'
  },
  {
    path: 'ocorrencias',
    loadChildren: () => import('./ocorrencias/ocorrencias.module').then(m => m.OcorrenciasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
