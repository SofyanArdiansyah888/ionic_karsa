import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchiveStadiumPage } from './archive-stadium.page';

const routes: Routes = [
  {
    path: '',
    component: ArchiveStadiumPage
  },
  {
    path: 'single-stadium',
    loadChildren: () => import('../single-stadium/single-stadium.module').then(m => m.SingleStadiumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchiveStadiumPageRoutingModule {}
