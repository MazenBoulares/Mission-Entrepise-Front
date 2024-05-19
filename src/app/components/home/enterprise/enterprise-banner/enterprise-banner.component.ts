import { Component } from '@angular/core';
import { banner } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-enterprise-banner',
  templateUrl: './enterprise-banner.component.html',
  styleUrls: ['./enterprise-banner.component.scss'],
})
export class EnterpriseBannerComponent {

  public title = 'enterprise';

  public bannerData: banner[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter((item) => item.type == this.title);
    });
  }
}
