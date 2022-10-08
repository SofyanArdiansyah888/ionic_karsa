import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
