import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailpesananPage } from './detailpesanan.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpesananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailpesananPageRoutingModule {}
