import { Component, Input } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { layout } from '../../interface/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() type: string;
  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() themeLogo: string;
  @Input() headerClass: string;
  @Input() headerFix: boolean;
  @Input() darkFooterLogo: string;
  @Input() darkThemeHeaderLogo: string;
  @Input() data: layout;

}
