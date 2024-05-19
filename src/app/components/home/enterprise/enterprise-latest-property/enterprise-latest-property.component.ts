import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-enterprise-latest-property',
  templateUrl: './enterprise-latest-property.component.html',
  styleUrls: ['./enterprise-latest-property.component.scss'],
})
export class EnterpriseLatestPropertyComponent {

  @Input() tagClass: string;
  @Input() latestForRentData: latestForRent[];

  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public title = 'enterprise';

  constructor(public propertyService: PropertyService){}

}
