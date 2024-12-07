import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriPageRoutingModule } from './kategori-routing.module';

import { KategoriPage } from './kategori.page';
import {BaseHeaderComponent} from '../../../components/base-header/base-header.component';
import {SkeletonListComponent} from '../../../components/skeleton-list/skeleton-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriPageRoutingModule,
    BaseHeaderComponent,
  ],
  declarations: [KategoriPage, SkeletonListComponent]
})
export class KategoriPageModule {}
