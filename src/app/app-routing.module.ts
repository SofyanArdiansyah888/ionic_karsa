import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'court/:id/booking',
    loadChildren: () => import('./olahraga/booking/booking.module').then( m => m.BookingPageModule)
  },

  {
    path: 'category/:id',
    loadChildren: () => import('./olahraga/olahraga.module').then( m => m.OlahragaPageModule)
  },
  {
    path: 'detailpesanan',
    loadChildren: () => import('./detailpesanan/detailpesanan.module').then( m => m.DetailpesananPageModule)
  },
  {
    path: 'akun',
    loadChildren: () => import('./akun/akun.module').then( m => m.AkunPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./auth/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'syarat',
    loadChildren: () => import('./syarat/syarat.module').then( m => m.SyaratPageModule)
  },
  {
    path: 'kebijakan',
    loadChildren: () => import('./kebijakan/kebijakan.module').then( m => m.KebijakanPageModule)
  },
  {
    path: 'kontak',
    loadChildren: () => import('./kontak/kontak.module').then( m => m.KontakPageModule)
  },
  {
    path: 'coming',
    loadChildren: () => import('./coming/coming.module').then( m => m.ComingPageModule)
  },
  {
    path: 'court/:id/detail-promo',
    loadChildren: () => import('./detail-promo/detail-promo.module').then( m => m.DetailPromoPageModule)
  },
  {
    path: 'court/:id/detail-court',
    loadChildren: () => import('./detail-court/detail-court.module').then( m => m.DetailCourtPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
