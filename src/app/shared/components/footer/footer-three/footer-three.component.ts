import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.scss'],
})
export class FooterThreeComponent {

  @Input() footerDark?: boolean = false;
  @Input() footerLogo: string;
  @Input() darkFooterLogo: string;

}
