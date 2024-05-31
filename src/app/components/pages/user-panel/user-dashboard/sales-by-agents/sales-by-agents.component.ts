import { Component } from '@angular/core';
import { salesByAgent } from '../../../../../shared/data/dashboard-charts';

@Component({
  selector: 'app-sales-by-agents',
  templateUrl: './sales-by-agents.component.html',
  styleUrls: ['./sales-by-agents.component.scss']
})
export class SalesByAgentsComponent {

  public salesByAgents = salesByAgent;

}
