import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../shared/interface/property';

@Component({
  selector: 'app-property-in-cities',
  templateUrl: './property-in-cities.component.html',
  styleUrls: ['./property-in-cities.component.scss'],
})
export class PropertyInCitiesComponent {

  @Input() propertyInCity: propertyInCity;
  @Input() propertyInCityData: propertyInCity[];
  @Input() type: string = '';
  @Input() tagClass: string = '';
}
