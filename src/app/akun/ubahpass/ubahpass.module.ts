import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahpassPageRoutingModule } from './ubahpass-routing.module';

import { UbahpassPage } from './ubahpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahpassPageRoutingModule
  ],
  declarations: [UbahpassPage]
})
export class UbahpassPageModule {}
