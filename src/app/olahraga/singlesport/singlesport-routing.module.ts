import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglesportPage } from './singlesport.page';

const routes: Routes = [
  {
    path: '',
    component: SinglesportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglesportPageRoutingModule {}
