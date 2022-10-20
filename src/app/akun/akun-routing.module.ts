import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkunPage } from './akun.page';

const routes: Routes = [
  {
    path: '',
    component: AkunPage
  },
  {
    path: 'ubahpass',
    loadChildren: () => import('./ubahpass/ubahpass.module').then( m => m.UbahpassPageModule)
  },
  {
    path: 'biodata',
    loadChildren: () => import('./biodata/biodata.module').then( m => m.BiodataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkunPageRoutingModule {}
