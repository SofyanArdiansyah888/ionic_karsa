import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilihPage } from './pilih/pilih.page';

import { SinglesportPage } from './singlesport.page';

const routes: Routes = [
  {
    path: '',
    component: SinglesportPage
  },
  {
    path: 'pilih',
    loadChildren: () => import('./pilih/pilih.module').then( m => m.PilihPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglesportPageRoutingModule {}
