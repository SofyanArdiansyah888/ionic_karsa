import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KebijakanPrivasiPage } from './kebijakan-privasi.page';

const routes: Routes = [
  {
    path: '',
    component: KebijakanPrivasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KebijakanPrivasiPageRoutingModule {}
