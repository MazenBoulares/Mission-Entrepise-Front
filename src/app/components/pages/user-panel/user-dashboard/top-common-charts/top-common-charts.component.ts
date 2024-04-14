import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-common-charts',
  templateUrl: './top-common-charts.component.html',
  styleUrls: ['./top-common-charts.component.scss'],
})
export class TopCommonChartsComponent {

  @Input() chartData: any;
  
}
