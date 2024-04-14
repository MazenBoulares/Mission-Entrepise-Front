import { Component } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-modern-video',
  templateUrl: './modern-video.component.html',
  styleUrls: ['./modern-video.component.scss'],
})
export class ModernVideoComponent {
  public headerLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public title = 'modern_video';
  public heading = 'Latest Property Listing';
  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public latestForRentData: latestForRent[];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default2',this.theme_default3);
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
