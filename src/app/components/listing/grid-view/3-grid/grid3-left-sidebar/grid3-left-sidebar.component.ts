import { Component } from '@angular/core';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';

@Component({
  selector: 'app-grid3-left-sidebar',
  templateUrl: './grid3-left-sidebar.component.html',
  styleUrls: ['./grid3-left-sidebar.component.scss'],
})
export class Grid3LeftSidebarComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Left sidebar';
  public parent = 'Listing';
  public child = 'Left sidebar';

  public listView: boolean = false;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4',this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }
}
