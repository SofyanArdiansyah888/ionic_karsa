import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeranjangPage } from './keranjang.page';

const routes: Routes = [
  {
    path: '',
    component: KeranjangPage
  },
  {
    path: 'bayar',
    loadChildren: () => import('./bayar/bayar.module').then( m => m.BayarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeranjangPageRoutingModule {}
