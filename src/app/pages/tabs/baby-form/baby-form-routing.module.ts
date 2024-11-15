import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabyFormPage } from './baby-form.page';

const routes: Routes = [
  {
    path: '',
    component: BabyFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabyFormPageRoutingModule {}
