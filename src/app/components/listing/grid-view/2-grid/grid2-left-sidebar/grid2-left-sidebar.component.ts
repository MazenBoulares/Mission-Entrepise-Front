import { Component } from '@angular/core';
import { pagination } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { PropertyService } from '../../../../../shared/services/property.service';

@Component({
  selector: 'app-grid2-left-sidebar',
  templateUrl: './grid2-left-sidebar.component.html',
  styleUrls: ['./grid2-left-sidebar.component.scss'],
})
export class Grid2LeftSidebarComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Property Listings';
  public parent = 'Listing';
  public child = 'Property Listings';

  public listView: boolean = false;
  public categoryValue: string;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyBoxGridService: PropertyBoxGridService, public propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getPaginationData(pagination: pagination) {
    this.paginationData = pagination;
  }

  sortFilter(value: string) {
    this.filterValue = value
  }
}
