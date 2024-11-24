import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
@Component({
  selector: 'app-svcbabytarget',
  templateUrl: './svcbabytarget.component.html',
  styleUrls: ['./svcbabytarget.component.scss'],
})
export class SvcbabytargetComponent implements OnInit, AfterViewInit {

  // public config: any = {
  //   type: 'bar',
  //   data: {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //       {
  //         label: 'My First Dataset',
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         backgroundColor: 'rgb(255, 99, 132)',
  //       }
  //     ]
  //   },
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: 'bottom',
  //       },
  //     },
  //   }
  // };

  // public config2: ChartConfiguration = {
  //   type: 'line',
  //   data: {
  //     labels: Array.from({ length: 15 }, (_, i) => -80 + i * 5), // -80 to -10
  //     datasets: [
  //       {
  //         label: 'Data one',
  //         data: [25, 35, 45, 60, 70, 75, 70, 65, 55, 50, 45, 35, 30, 25, 20],
  //         borderColor: 'blue',
  //         backgroundColor: 'rgba(0, 0, 255, 0.1)',
  //         fill: true,
  //         tension: 0.4,
  //       },
  //       {
  //         label: 'Data two',
  //         data: [20, 25, 30, 40, 50, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15],
  //         borderColor: 'magenta',
  //         backgroundColor: 'rgba(255, 0, 255, 0.1)',
  //         fill: true,
  //         tension: 0.4,
  //       },
  //     ],
  //   },
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: 'bottom',
  //       },
  //     },
  //   }
  // };

  // public config3: ChartConfiguration = {
  //   type: 'polarArea',
  //   data: {
  //     labels: ['Germany', 'Spain', 'Italy', 'France', 'Poland', 'Czech Republic'],
  //     datasets: [
  //       {
  //         label: 'Population Density',
  //         data: [232, 150, 200, 125, 110, 80],
  //         backgroundColor: [
  //           'rgba(101, 58, 252, 1)',
  //           'rgba(248, 69, 117, 1)',
  //           'rgba(234, 236, 239, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //         ],
  //         borderColor: [
  //           'rgba(101, 58, 252, 1)',
  //           'rgba(248, 69, 117, 1)',
  //           'rgba(234, 236, 239, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //         ],
          
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: 'bottom',
  //       },
  //     },
  //   }
  // };

  // chart: any;
  // secondChart: any;
  // thirdChart: any;



  constructor() { }

  ngOnInit() {
    // this.chart = new Chart('canvas', this.config);
    // this.secondChart = new Chart('myChart', this.config2);
    // this.thirdChart = new Chart('Chart', this.config3);
  }

  ngAfterViewInit(): void {
    // this.createChart();
  }

 
}
