import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCourtPage } from './detail-court.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCourtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCourtPageRoutingModule {}
