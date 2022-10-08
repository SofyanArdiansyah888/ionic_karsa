import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihPageRoutingModule } from './pilih-routing.module';

import { PilihPage } from './pilih.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihPageRoutingModule
  ],
  declarations: [PilihPage]
})
export class PilihPageModule {}
