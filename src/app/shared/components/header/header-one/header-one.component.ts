import { Component, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
})
export class HeaderOneComponent {

  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() headerClass?: string = '';
  @Input() headerFix? : boolean = false;

  public headerFixed: boolean = false;

  constructor(public layout: LayoutService){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }
}
