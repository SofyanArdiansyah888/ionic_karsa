import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihPage } from './pilih.page';

const routes: Routes = [
  {
    path: '',
    component: PilihPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihPageRoutingModule {}
