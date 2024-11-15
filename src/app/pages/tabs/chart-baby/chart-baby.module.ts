import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartBabyPageRoutingModule } from './chart-baby-routing.module';

import { ChartBabyPage } from './chart-baby.page';
import { HtmlModule } from '../../../modules/html/html.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlModule,    
    ChartBabyPageRoutingModule
  ],
  declarations: [ChartBabyPage]
})
export class ChartBabyPageModule {}
