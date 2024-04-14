import { Component, Input } from '@angular/core';
import { whyChooseUs } from '../../../../../../shared/data/about-us';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
})
export class WhyChooseUsComponent {

  @Input() whyChooseUsData: whyChooseUs;

}
