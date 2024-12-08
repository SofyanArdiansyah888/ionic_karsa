import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BayarPageRoutingModule } from './bayar-routing.module';

import { BayarPage } from './bayar.page';
import {BaseHeaderComponent} from "../../../../../../components/base-header/base-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BayarPageRoutingModule,
    BaseHeaderComponent
  ],
  declarations: [BayarPage]
})
export class BayarPageModule {}
