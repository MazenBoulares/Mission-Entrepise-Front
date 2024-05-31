import { Component } from '@angular/core';
import { salesOverviewChart } from '../../../../../shared/data/dashboard-charts';
import { salesOverviewCommonData } from '../../../../../shared/data/user-panel';

@Component({
  selector: 'app-sales-overview',
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.scss'],
})
export class SalesOverviewComponent {

  public salesOverViewChartData = salesOverviewChart;
  public salesOverviewCommonData = salesOverviewCommonData;

}
