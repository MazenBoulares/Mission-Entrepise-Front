import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {

  @Input() captcha:boolean = false;
  @Input() rowClass: string;

}
