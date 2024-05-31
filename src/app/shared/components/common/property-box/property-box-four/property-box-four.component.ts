import { Component, Input } from '@angular/core';
import { currency, latestForRent } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-property-box-four',
  templateUrl: './property-box-four.component.html',
  styleUrls: ['./property-box-four.component.scss'],
})
export class PropertyBoxFourComponent {

  @Input() latestPropertyData: latestForRent[];
  @Input() propertyListingDataClassic: latestForRent;
  @Input() carousel: boolean = false;

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  };
}
