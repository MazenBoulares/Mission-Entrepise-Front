import { Component, Input } from '@angular/core';
import { homeSectionSlider } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';

@Component({
  selector: 'app-slider-three',
  templateUrl: './slider-three.component.html',
  styleUrls: ['./slider-three.component.scss'],
})
export class SliderThreeComponent {

  @Input() homeSectionSliderData: homeSectionSlider[];

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
  };

  constructor(public propertyService: PropertyService) {}


}
