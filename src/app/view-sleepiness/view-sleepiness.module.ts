import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSleepinessPageRoutingModule } from './view-sleepiness-routing.module';

import { ViewSleepinessPage } from './view-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSleepinessPageRoutingModule
  ],
  declarations: [ViewSleepinessPage]
})
export class ViewSleepinessPageModule {}
