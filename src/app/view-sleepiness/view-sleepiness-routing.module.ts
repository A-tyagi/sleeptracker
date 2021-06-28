import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSleepinessPage } from './view-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSleepinessPageRoutingModule {}
