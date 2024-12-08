import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglesportPageRoutingModule } from './singlesport-routing.module';

import { SinglesportPage } from './singlesport.page';
import {BaseHeaderComponent} from "../../../../components/base-header/base-header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SinglesportPageRoutingModule,
        BaseHeaderComponent
    ],
  declarations: [SinglesportPage]
})
export class SinglesportPageModule {}
