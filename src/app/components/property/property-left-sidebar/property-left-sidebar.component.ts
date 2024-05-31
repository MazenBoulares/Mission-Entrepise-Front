import { Component } from '@angular/core';
import { tabData } from '../../../shared/data/sticky-tab';
import { homeSectionSlider, latestForRent, propertyDetailsData } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-property-left-sidebar',
  templateUrl: './property-left-sidebar.component.html',
  styleUrls: ['./property-left-sidebar.component.scss'],
})
export class PropertyLeftSidebarComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public title = 'sticky_tab';
  public activeClass = 'about';

  public navFixed: boolean = false;
  public total = 3;
  public homeSectionSliderData: homeSectionSlider[];
  public latestForRentData: latestForRent[] = [];
  public propertyData: propertyDetailsData;

  public tabData = tabData;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title
      );
    });

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;
    });

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes('slider_filter_search')
      );
    });
  }



  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
