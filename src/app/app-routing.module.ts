import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'view-overnight',
    loadChildren: () => import('./view-overnight/view-overnight.module').then( m => m.ViewOvernightPageModule)
  },
  {
    path: 'view-sleepiness',
    loadChildren: () => import('./view-sleepiness/view-sleepiness.module').then( m => m.ViewSleepinessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
