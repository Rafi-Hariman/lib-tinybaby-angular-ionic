import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'baby',
        loadChildren: () => import('./baby-information/baby-information.module').then(m => m.BabyInformationPageModule)
      },
      {
        path: 'data',
        loadChildren: () => import('./baby-form/baby-form.module').then(m => m.BabyFormPageModule)
      },
      {
        path: 'target',
        loadChildren: () => import('./baby-target/baby-target.module').then(m => m.BabyTargetPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'chart-baby',
        loadChildren: () => import('./chart-baby/chart-baby.module').then(m => m.ChartBabyPageModule)
      }
    ],
  },
  {
    path: 'chart-baby',
    loadChildren: () => import('./chart-baby/chart-baby.module').then( m => m.ChartBabyPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
