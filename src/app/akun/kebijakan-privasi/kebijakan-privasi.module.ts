import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KebijakanPrivasiPageRoutingModule } from './kebijakan-privasi-routing.module';

import { KebijakanPrivasiPage } from './kebijakan-privasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KebijakanPrivasiPageRoutingModule
  ],
  declarations: [KebijakanPrivasiPage]
})
export class KebijakanPrivasiPageModule {}
