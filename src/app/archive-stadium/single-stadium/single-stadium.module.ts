import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleStadiumPageRoutingModule } from './single-stadium-routing.module';

import { SingleStadiumPage } from './single-stadium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleStadiumPageRoutingModule
  ],
  declarations: [SingleStadiumPage]
})
export class SingleStadiumPageModule {}
