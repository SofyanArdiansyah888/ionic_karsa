import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstruksiPageRoutingModule } from './instruksi-routing.module';

import { InstruksiPage } from './instruksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstruksiPageRoutingModule
  ],
  declarations: [InstruksiPage]
})
export class InstruksiPageModule {}
