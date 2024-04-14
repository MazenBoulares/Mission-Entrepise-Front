import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-left-sidebar',
  templateUrl: './tab-left-sidebar.component.html',
  styleUrls: ['./tab-left-sidebar.component.scss'],
})
export class TabLeftSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Left Sidebar';
  public parent = 'Listing';
  public child = 'Left Sidebar';

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

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
