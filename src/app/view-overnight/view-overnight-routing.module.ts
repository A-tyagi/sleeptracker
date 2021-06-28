import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOvernightPage } from './view-overnight.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOvernightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOvernightPageRoutingModule {}
