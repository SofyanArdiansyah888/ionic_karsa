import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyaratKetentuanPageRoutingModule } from './syarat-ketentuan-routing.module';

import { SyaratKetentuanPage } from './syarat-ketentuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyaratKetentuanPageRoutingModule
  ],
  declarations: [SyaratKetentuanPage]
})
export class SyaratKetentuanPageModule {}
