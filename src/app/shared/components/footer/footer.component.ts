import { Component, Input } from '@angular/core';
import { footerBlogData } from '../../interface/footer';
import { layout } from '../../interface/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  @Input() data: layout;
  @Input() type: string;
  @Input() themeLogo: string;
  @Input() footerClass: string;
  @Input() heartIcon: boolean;
  @Input() footerDark: boolean;
  @Input() footerLogo: string;
  @Input() darkFooterLogo: string;
  @Input() subFooterClass: string;

}
