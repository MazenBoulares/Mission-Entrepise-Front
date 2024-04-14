import { Component } from '@angular/core';
import { PropertyService } from '../../../../../shared/services/property.service';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';

@Component({
  selector: 'app-grid2-no-sidebar',
  templateUrl: './grid2-no-sidebar.component.html',
  styleUrls: ['./grid2-no-sidebar.component.scss'],
})
export class Grid2NoSidebarComponent {
  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'No sidebar';
  public parent = 'Listing';
  public child = 'No sidebar';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyBoxGridService: PropertyBoxGridService,  public propertyService: PropertyService) {}

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
