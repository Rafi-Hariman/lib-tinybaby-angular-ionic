import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType} from 'chart.js';
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-svcbabytarget',
  templateUrl: './svcbabytarget.component.html',
  styleUrls: ['./svcbabytarget.component.scss'],
})
export class SvcbabytargetComponent  implements OnInit {

  public config : any = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets : [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgb(255, 99, 132)',
        }
      ]
    },
    options: {
      aspectRatio: 1,
    },
  };

  chart :any;

  

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', this.config);
  }
}