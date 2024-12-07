import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbahpassPage } from './ubahpass.page';

const routes: Routes = [
  {
    path: '',
    component: UbahpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbahpassPageRoutingModule {}
