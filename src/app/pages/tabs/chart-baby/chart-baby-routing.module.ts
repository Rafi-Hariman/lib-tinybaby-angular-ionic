import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartBabyPage } from './chart-baby.page';

const routes: Routes = [
  {
    path: '',
    component: ChartBabyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartBabyPageRoutingModule {}
