import { Component, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent {

  @Input() headerFix?: boolean = false;
  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() darkFooterLogo: string;
  @Input() darkThemeHeaderLogo?: string;

  public headerFixed: boolean = false;
  public isOpenSearch: boolean = false;

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

  openSearch(){
    this.isOpenSearch =! this.isOpenSearch;
  }
}
