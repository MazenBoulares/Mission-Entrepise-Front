import { Component, Input } from '@angular/core';
import { footerBlogData } from '../../../../shared/interface/footer';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent {

  @Input() blogData: footerBlogData[] = [];
  @Input() footerLogo: string = 'assets/images/logo/6.png';
  @Input() footerClass?: string = '';
  @Input() heartIcon?: boolean = true;
  @Input() darkFooterLogo: string;
  @Input() subFooterClass?: string;
}
