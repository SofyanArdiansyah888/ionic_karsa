import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlahragaPage } from './olahraga.page';

const routes: Routes = [
  {
    path: '',
    component: OlahragaPage
  },
  {
    path: 'singlesport/:id',
    loadChildren: () => import('./singlesport/singlesport.module').then( m => m.SinglesportPageModule)
  },
  // {
  //   path: 'pilih/:id',
  //   loadChildren: () => import('./singlesport/pilih/pilih.module').then( m => m.PilihPageModule)
  // },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlahragaPageRoutingModule {}
