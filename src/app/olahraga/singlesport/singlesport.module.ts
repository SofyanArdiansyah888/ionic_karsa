import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglesportPageRoutingModule } from './singlesport-routing.module';

import { SinglesportPage } from './singlesport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglesportPageRoutingModule
  ],
  declarations: [SinglesportPage]
})
export class SinglesportPageModule {}
