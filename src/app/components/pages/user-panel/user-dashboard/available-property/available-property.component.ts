import { Component } from '@angular/core';
import { availablePropertyData } from '../../../../../shared/data/dashboard-charts';
import { StatsService } from 'src/app/services/stats.service';
import { Chart, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-available-property',
  templateUrl: './available-property.component.html',
  styleUrls: ['./available-property.component.scss'],
})
export class AvailablePropertyComponent {

  public availablePropertyData: ChartOptions | any = {
    chart: {
      height: 330,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        track: {
          show: true,
          background: '#f2f2f2',
          strokeWidth: '20%',
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          name: {
            fontSize: '40px',
          },
          value: {
            show: false,
          },
          total: {
            show: true,
            label: '80',
          },
        },
      },
    },
    series: [80],
    labels: ['property for Rent'],
    colors: ['#63ad24'],
    stroke: {
      lineCap: 'round',
    },
  };
  constructor(private statsService:StatsService){

  }
  ngOnInit(): void {
    this.statsService.getListingsByType(1).subscribe({
      next:(data:any)=>{
        console.log(data["RENT"])
        this.availablePropertyData.series=data["RENT"]
        this.availablePropertyData.plotOptions.dataLabels.total.label=data["RENT"]
      }
    })
  }
}
