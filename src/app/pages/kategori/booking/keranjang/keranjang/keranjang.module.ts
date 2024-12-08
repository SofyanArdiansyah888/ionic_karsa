import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeranjangPageRoutingModule } from './keranjang-routing.module';

import { KeranjangPage } from './keranjang.page';
import {BaseHeaderComponent} from "../../../../../components/base-header/base-header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KeranjangPageRoutingModule,
        BaseHeaderComponent
    ],
  declarations: [KeranjangPage]
})
export class KeranjangPageModule {}
