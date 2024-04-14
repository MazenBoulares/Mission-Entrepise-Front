import { Component } from '@angular/core';
import { propertyOverviewData } from '../../../../../shared/data/user-panel';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
})
export class PropertyOverviewComponent {

  public propertyOverviewData = propertyOverviewData;

}
