import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabyInformationPage } from './baby-information.page';

const routes: Routes = [
  {
    path: '',
    component: BabyInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabyInformationPageRoutingModule {}
