import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-two',
  templateUrl: './contact-two.component.html',
  styleUrls: ['./contact-two.component.scss']
})
export class ContactTwoComponent {

  @Input() footerLogo: string;

}
