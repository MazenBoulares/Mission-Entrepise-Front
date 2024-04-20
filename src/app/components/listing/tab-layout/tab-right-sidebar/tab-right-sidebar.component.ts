import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-right-sidebar',
  templateUrl: './tab-right-sidebar.component.html',
  styleUrls: ['./tab-right-sidebar.component.scss'],
})
export class TabRightSidebarComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Right Sidebar';
  public parent = 'Listing';
  public child = 'Right Sidebar';

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor() {}
  
  ngOnInit() {
    document.documentElement.style.setProperty( '--theme-default', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
