import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'archive-stadium',
    loadChildren: () => import('./archive-stadium/archive-stadium.module').then( m => m.ArchiveStadiumPageModule)
  },
  {
    path: 'olahraga',
    loadChildren: () => import('./olahraga/olahraga.module').then( m => m.OlahragaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
