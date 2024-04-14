import { Component, Input } from '@angular/core';
import { currency, homeSectionSlider } from '../../../../shared/interface/property';

@Component({
  selector: 'app-home-section-slider',
  templateUrl: './home-section-slider.component.html',
  styleUrls: ['./home-section-slider.component.scss']
})
export class HomeSectionSliderComponent {

  @Input() homeSectionSliderData: homeSectionSlider[] = [];
  @Input() type : string = '';

}
