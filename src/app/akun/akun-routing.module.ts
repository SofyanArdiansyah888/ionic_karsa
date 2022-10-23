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
  },
  {
    path: 'syarat-ketentuan',
    loadChildren: () => import('./syarat-ketentuan/syarat-ketentuan.module').then( m => m.SyaratKetentuanPageModule)
  },
  {
    path: 'kebijakan-privasi',
    loadChildren: () => import('./kebijakan-privasi/kebijakan-privasi.module').then( m => m.KebijakanPrivasiPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkunPageRoutingModule {}
