import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOvernightPageRoutingModule } from './view-overnight-routing.module';

import { ViewOvernightPage } from './view-overnight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOvernightPageRoutingModule
  ],
  declarations: [ViewOvernightPage]
})
export class ViewOvernightPageModule {}
