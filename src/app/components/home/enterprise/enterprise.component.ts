import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent {

  public themeLogo = 'assets/images/logo/footer-logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public headerLogo = 'assets/images/logo/2.png';
  public headerClass = 'header-2';
  public title = 'enterprise';

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public latestForRentData: latestForRent[];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4',this.theme_default4);

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
