import { Component } from '@angular/core';
import { availablePropertyData } from '../../../../../shared/data/dashboard-charts';

@Component({
  selector: 'app-available-property-2',
  templateUrl: './available-property.component.html',
  styleUrls: ['./available-property.component.scss'],
})
export class AvailablePropertyComponent2 {

  public availablePropertyData = availablePropertyData;

}
