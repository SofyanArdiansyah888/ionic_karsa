import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpesananPageRoutingModule } from './detailpesanan-routing.module';

import { DetailpesananPage } from './detailpesanan.page';
import {BaseHeaderComponent} from "../../components/base-header/base-header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailpesananPageRoutingModule,
        BaseHeaderComponent
    ],
  declarations: [DetailpesananPage]
})
export class DetailpesananPageModule {}
