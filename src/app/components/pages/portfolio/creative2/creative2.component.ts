import { Component } from '@angular/core';
import { parallaxImage } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-creative2',
  templateUrl: './creative2.component.html',
  styleUrls: ['./creative2.component.scss'],
})
export class Creative2Component {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Portfolio';
  public parent = 'Home';
  public child = 'Portfolio';

  public creativePageData: parallaxImage[];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';
  
  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.creativePageData = response.creativePage2Data;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
