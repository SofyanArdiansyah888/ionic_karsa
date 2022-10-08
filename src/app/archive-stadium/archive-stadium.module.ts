import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchiveStadiumPageRoutingModule } from './archive-stadium-routing.module';

import { ArchiveStadiumPage } from './archive-stadium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchiveStadiumPageRoutingModule
  ],
  declarations: [ArchiveStadiumPage]
})
export class ArchiveStadiumPageModule {}
