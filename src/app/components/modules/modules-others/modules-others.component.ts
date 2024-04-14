import { Component } from '@angular/core';
import { propertyInCity, propertyOfDay } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-modules-others',
  templateUrl: './modules-others.component.html',
  styleUrls: ['./modules-others.component.scss'],
})
export class ModulesOthersComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Others';
  public parent = 'Modules';
  public child = 'Others';

  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';

  public otherTitle1 = 'image_content';
  public otherTitle2 = 'enterprise';

  public propertyInCity: propertyInCity[] = [];
  public propertyOfDay: propertyOfDay[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.otherTitle1)
      );
    });

    this.propertyService.propertyOfDayData().subscribe((response) => {
      this.propertyOfDay = response.propertyOfDay.filter((item) =>
        item.type.includes(this.otherTitle2)
      );
    });
  }
}
