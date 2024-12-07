import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyaratKetentuanPage } from './syarat-ketentuan.page';

const routes: Routes = [
  {
    path: '',
    component: SyaratKetentuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyaratKetentuanPageRoutingModule {}
