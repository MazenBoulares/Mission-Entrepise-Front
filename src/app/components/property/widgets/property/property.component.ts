import { Component, Input } from '@angular/core';
import { propertyDetailsData } from '../../../../shared/interface/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {

  @Input() propertyData: propertyDetailsData;
  @Input() type: string;
  @Input() dataArray: string[];
  @Input() propertyDetailsData: propertyDetailsData;

}
