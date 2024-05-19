import { Component, Input } from '@angular/core';
import { latestForRent, latestForSale } from '../../../../shared/interface/property';

@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss'],
})

export class PropertyBoxComponent {

  @Input() title: string = '';
  @Input() propertyData: latestForSale;
  @Input() latestForRentData: latestForRent;
  @Input() propertyListingData: latestForRent;
  @Input() latestPropertyData: latestForRent[];
  @Input() propertyListingDataClassic: latestForRent;
  @Input() type: string = '';
  @Input() textColor: boolean = false;
  @Input() tagClass: string = '';
  @Input() carousel: boolean = false;
  @Input() data: number;
  @Input() listView: boolean = false;
  @Input() thumbnail: boolean = false;
  @Input() thumbnail_video: boolean = false;
  @Input() gridImages: boolean = false;

}
