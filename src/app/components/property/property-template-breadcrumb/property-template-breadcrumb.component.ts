import { Component } from '@angular/core';
import { PropertyService } from '../../../shared/services/property.service';
import { propertyDetailsData } from '../../../shared/interface/property';

@Component({
  selector: 'app-property-template-breadcrumb',
  templateUrl: './property-template-breadcrumb.component.html',
  styleUrls: ['./property-template-breadcrumb.component.scss'],
})
export class PropertyTemplateBreadcrumbComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Property Page';
  public parent = 'Home';
  public child = 'Property Page';

  public propertyDetailsData: propertyDetailsData;
  public propertyData: propertyDetailsData;
  
  public dataArray = ['about','feature','gallery','video','floor_plan','location'];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;

      if (Array.isArray(this.dataArray)) {
        if (Array.isArray(response.data)) {
          this.propertyDetailsData = response.data.filter(
            (tabData: { value: string }) =>
              this.dataArray?.includes(tabData.value)
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
