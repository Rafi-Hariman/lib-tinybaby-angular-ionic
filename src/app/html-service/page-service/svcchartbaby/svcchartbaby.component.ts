import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-svcchartbaby',
  templateUrl: './svcchartbaby.component.html',
  styleUrls: ['./svcchartbaby.component.scss'],
})
export class SvcchartbabyComponent implements OnInit, AfterViewInit {
  delayed: boolean = false;

  chart: any;
  age: number | null = null;
  weight: number | null = null; // Berat bayi dalam ons
  height: number | null = null; // Tinggi bayi dalam cm
  checkboxCount: number | null = null;
  weightPercentage: number | null = null;
  heightPercentage: number | null = null;
  skillPercentage: number | null = null; // Persentase perkembangan kemampuan

  // Target kemampuan dan bicara
  targetSkills = [
    "Tersenyum",
    "Mengangkat kepala",
    "Berguling",
    "Duduk tanpa bantuan",
    "Merangkak",
    "Berjalan dengan bantuan",
    "Berjalan tanpa bantuan",
    "Mengucapkan kata pertama",
    "Menyusun 2 kata sederhana",
    "Menyebutkan nama benda sederhana",
  ];


  // Target Data dalam ons dan centimeter
  targetWeight = Array.from({ length: 100 }, (_, i) => 50 + i * 5); // Increment by 5 cm for each month
  targetHeight = Array.from({ length: 1500 }, (_, i) => 50 + i * 5); // Increment by 5 cm for each month

  config: ChartConfiguration = {
    type: 'line', // Set base type as 'line'
    data: {
      labels: [],
      datasets: [
        {
          label: 'Berat Bayi (ons)',
          data: [],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          type: 'bar', // Set this dataset to be displayed as a bar chart
        },
        {
          label: 'Tinggi Bayi (cm)',
          data: [],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderWidth: 2,
          type: 'bar', // Set this dataset to be displayed as a bar chart
        },
        {
          label: 'Target Berat (ons)',
          data: [],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          type: 'line', // Target weight as a line chart
          tension: 0.4, // Smooth the line
        },
        {
          label: 'Target Tinggi (cm)',
          data: [],
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderWidth: 2,
          type: 'line', // Target height as a line chart
          tension: 0.4, // Smooth the line
        },
      ],
    },
    options: {
      animation: {
        onComplete: () => {
          this.delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !this.delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },

      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Usia (Bulan)',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Nilai (ons/cm)',
          },
        },
      },
    },
  };
  currentYear: number;

  constructor(private route: ActivatedRoute) { 
    this.currentYear = new Date().getDate();
  }
  currentDate: string = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  ngOnInit() {
    console.log('Current Year:', this.currentYear);
    
    this.route.queryParams.subscribe((params) => {
      this.age = +params['age'] || null;
      this.weight = +params['weight'] || null; // Berat bayi dari input dalam ons
      this.height = +params['height'] || null; // Tinggi bayi dari input dalam cm
      this.checkboxCount = +params['checkbox'] || null;

      console.log('Params:', {
        age: this.age,
        weight: this.weight,
        height: this.height,
        checkboxCount: this.checkboxCount,
      });

      this.updateChart();
    });
  }

  ngAfterViewInit(): void {
    this.updateChart();
  }

  updateChart() {
    if (this.chart) this.chart.destroy(); // Destroy existing chart if any
  
    // Generate labels for X-axis (months up to the age parameter)
    const labels = Array.from({ length: this.age || 0 }, (_, i) => `Bulan ${i + 1}`);
    this.config.data.labels = labels;
  
    // Baby's weight and height data with decreasing values
    const babyWeightData = this.age
      ? Array.from({ length: this.age }, (_, i) => Math.max((this.weight || 0) + i * 5, 0)) // Berat bayi (ons) menurun 5 setiap bulan
      : [];
    const babyHeightData = this.age
      ? Array.from({ length: this.age }, (_, i) => Math.max((this.height || 0) + i * 5, 0)) // Tinggi bayi (cm) menurun 5 setiap bulan
      : [];
  
    // Target weight and height data
    const targetWeightData = this.targetWeight.slice(0, this.age || 0).map((weight, index) => {
      const adjustment = (this.checkboxCount || 0) * 50; // Setiap checkbox menambah 50 ons
      return weight + adjustment;
    });
    const targetHeightData = this.targetHeight.slice(0, this.age || 0);
  
    // Update datasets
    this.config.data.datasets[0].data = babyWeightData; // Berat bayi
    this.config.data.datasets[1].data = babyHeightData; // Tinggi bayi
    this.config.data.datasets[2].data = targetWeightData; // Target berat
    this.config.data.datasets[3].data = targetHeightData; // Target tinggi
  
    // Calculate percentage for the last month
    if (this.age && this.age > 0) {
      this.weightPercentage = this.calculatePercentage(
        this.weight,
        targetWeightData[this.age - 1] // Target terakhir
      );
  
      this.heightPercentage = this.calculatePercentage(
        this.height,
        targetHeightData[this.age - 1] // Target terakhir
      );
  
      this.skillPercentage = this.calculateSkillPercentage(this.checkboxCount, 4); // Total checkbox hanya 4
    }
  
    // Create chart
    this.chart = new Chart('babyChart', this.config);
  }

  calculateSkillPercentage(checkboxCount: number | null, totalSkills: number): number {
    if (checkboxCount !== null && totalSkills > 0) {
      return Math.min((checkboxCount / totalSkills) * 100, 100); // Batas maksimum 100%
    }
    return 0;
  }

  calculatePercentage(actual: number | null, target: number | null): number {
    if (actual !== null && target !== null && target > 0) {
      return Math.min((actual / target) * 100, 100); // Batas maksimum 100%
    }
    return 0;
  }
}
