import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlahragaPageRoutingModule } from './olahraga-routing.module';

import { OlahragaPage } from './olahraga.page';
import {BaseHeaderComponent} from '../../../components/base-header/base-header.component';
import {SkeletonListComponent} from '../../../components/skeleton-list/skeleton-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlahragaPageRoutingModule,
    BaseHeaderComponent,
  ],
  declarations: [OlahragaPage, SkeletonListComponent]
})
export class OlahragaPageModule {}
