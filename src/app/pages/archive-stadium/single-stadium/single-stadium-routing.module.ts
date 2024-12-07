import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleStadiumPage } from './single-stadium.page';

const routes: Routes = [
  {
    path: '',
    component: SingleStadiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleStadiumPageRoutingModule {}
