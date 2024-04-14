import { Component, Input } from '@angular/core';
import { details } from '../../../../shared/data/contact-us';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent {

  @Input() contactDetailsData: details;
  @Input() divClass: string;

}
