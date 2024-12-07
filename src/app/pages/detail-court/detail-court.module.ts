import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCourtPageRoutingModule } from './detail-court-routing.module';

import { DetailCourtPage } from './detail-court.page';
import {BaseHeaderComponent} from "../../components/base-header/base-header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailCourtPageRoutingModule,
        BaseHeaderComponent
    ],
  declarations: [DetailCourtPage]
})
export class DetailCourtPageModule {}
