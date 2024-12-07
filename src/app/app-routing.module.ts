import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'court/:id/booking',
    loadChildren: () => import('./pages/kategori/booking/booking/booking.module').then(m => m.BookingPageModule)
  },

  {
    path: 'category/:id',
    loadChildren: () => import('./pages/kategori/kategori/kategori.module').then(m => m.KategoriPageModule)
  },
  {
    path: 'detailpesanan',
    loadChildren: () => import('./pages/detail-pesanan/detailpesanan.module').then(m => m.DetailpesananPageModule)
  },
  {
    path: 'akun',
    loadChildren: () => import('./pages/akun/akun/akun.module').then(m => m.AkunPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./pages/auth/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'syarat',
    loadChildren: () => import('./pages/syarat/syarat.module').then(m => m.SyaratPageModule)
  },
  {
    path: 'kebijakan',
    loadChildren: () => import('./pages/kebijakan/kebijakan.module').then( m => m.KebijakanPageModule)
  },
  {
    path: 'kontak',
    loadChildren: () => import('./pages/kontak/kontak.module').then( m => m.KontakPageModule)
  },
  {
    path: 'coming',
    loadChildren: () => import('./pages/coming/coming.module').then(m => m.ComingPageModule)
  },
  {
    path: 'court/:id/detail-promo',
    loadChildren: () => import('./pages/detail-promo/detail-promo.module').then(m => m.DetailPromoPageModule)
  },
  {
    path: 'court/:id/detail-court',
    loadChildren: () => import('./pages/detail-court/detail-court.module').then(m => m.DetailCourtPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
