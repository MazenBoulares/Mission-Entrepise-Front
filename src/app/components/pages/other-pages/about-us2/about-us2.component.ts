import { Component } from '@angular/core';
import { agents, latestBlog, peopleSay, providedServices } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-about-us2',
  templateUrl: './about-us2.component.html',
  styleUrls: ['./about-us2.component.scss'],
})
export class AboutUs2Component {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/parallax/3.jpg';
  public title = 'About Us';
  public parent = 'Home';
  public child = 'About Us';
  public tagClass = 'color-2';

  public aboutDesc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public providedServiceDesc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public agentsDesc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public peopleSayDesc = 'Cum doctus civibus efficiantur in imperdiet deterruisset.';
  public blogDesc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';

  public serviceTitle = 'corporate';
  public agentsTitle = 'slider_filter_search';
  public peopleSayTitle = 'enterprise';
  public blogTitle = 'corporate';

  public providedServices: providedServices[] = [];
  public agentsData: agents[] = [];
  public peopleSayData: peopleSay[];
  public latestBlogData: latestBlog[] = [];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter((item) => item.type == this.serviceTitle);
    });

    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter((item) => item.type.includes(this.agentsTitle));
    });

    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter((item) => item.type == this.peopleSayTitle);
    });

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == this.blogTitle);
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
