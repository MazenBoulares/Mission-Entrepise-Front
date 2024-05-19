import { Component } from '@angular/core';
import { ModulesLabelData } from '../../../shared/data/modules';

@Component({
  selector: 'app-modules-label',
  templateUrl: './modules-label.component.html',
  styleUrls: ['./modules-label.component.scss'],
})
export class ModulesLabelComponent {

  public themeLogo = 'assets/images/logo/logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Label';
  public parent = 'Modules';
  public child = 'Label';

  public ModulesLabelData = ModulesLabelData;

  public theme_default3 = '#63ad24';
  public theme_default4 = '#6bc115';

}
