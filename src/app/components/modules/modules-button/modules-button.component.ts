import { Component } from '@angular/core';
import { modulesButtonData } from '../../../shared/data/modules';

@Component({
  selector: 'app-modules-button',
  templateUrl: './modules-button.component.html',
  styleUrls: ['./modules-button.component.scss'],
})
export class ModulesButtonComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Button';
  public parent = 'Modules';
  public child = 'Button';

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

  public modulesButtonData = modulesButtonData;

}
