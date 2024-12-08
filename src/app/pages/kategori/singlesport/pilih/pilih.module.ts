import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihPageRoutingModule } from './pilih-routing.module';

import { PilihPage } from './pilih.page';
import {BaseHeaderComponent} from "../../../../components/base-header/base-header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PilihPageRoutingModule,
        BaseHeaderComponent
    ],
  declarations: [PilihPage]
})
export class PilihPageModule {}
