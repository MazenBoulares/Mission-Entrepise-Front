import { Component, Input } from '@angular/core';
import { homeSectionSlider } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-slider-two',
  templateUrl: './slider-two.component.html',
  styleUrls: ['./slider-two.component.scss']
})
export class SliderTwoComponent {

  @Input() homeSectionSliderData: homeSectionSlider[] = [];

  public Options = {
    loop: true,
    nav: true,
    dots:false,
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    responsive: {
      0 : {
        items: 1
      }
    }
  }
}
