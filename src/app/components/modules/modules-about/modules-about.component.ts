import { Component } from '@angular/core';
import { agents } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-modules-about',
  templateUrl: './modules-about.component.html',
  styleUrls: ['./modules-about.component.scss'],
})
export class ModulesAboutComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'About';
  public parent = 'Modules';
  public child = 'About';

  public desc1 = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public desc2 = 'Residences can be classified into different type of housing tenure can used for same physical type.';

  public agentsTitle1 = 'image_content';
  public agentsTitle2 = 'corporate';
  public agentsTitle3 = 'classic';

  public agentsData1: agents[] = [];
  public agentsData2: agents[] = [];
  public agentsData3: agents[] = [];

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData1 = response.agents.filter((item) => item.type.includes(this.agentsTitle1));
      this.agentsData2 = response.agents.filter((item) => item.type == this.agentsTitle2);
      this.agentsData3 = response.agents.filter((item) => item.type == this.agentsTitle3);
    });
  }
}
