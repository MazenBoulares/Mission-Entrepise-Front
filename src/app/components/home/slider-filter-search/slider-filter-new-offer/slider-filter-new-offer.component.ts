import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-filter-new-offer',
  templateUrl: './slider-filter-new-offer.component.html',
  styleUrls: ['./slider-filter-new-offer.component.scss']
})
export class SliderFilterNewOfferComponent {

  @Input() tagClass: string = '';
  @Input() title: string;
  @Input() sectionClass: string;

}
